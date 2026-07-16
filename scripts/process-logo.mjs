import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const source = path.join(
  root,
  "assets",
  "brand",
  "betha-logo-chroma-source.png",
);
const publicBrand = path.join(root, "public", "brand");
const appDir = path.join(root, "src", "app");

await fs.mkdir(publicBrand, { recursive: true });

const { data, info } = await sharp(source)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let index = 0; index < data.length; index += 4) {
  const red = data[index];
  const green = data[index + 1];
  const blue = data[index + 2];
  const originalAlpha = data[index + 3];
  const distanceFromMagenta = Math.sqrt(
    (red - 255) ** 2 + green ** 2 + (blue - 255) ** 2,
  );

  let matte = 1;
  if (distanceFromMagenta <= 65) {
    matte = 0;
  } else if (distanceFromMagenta < 165) {
    matte = (distanceFromMagenta - 65) / 100;
  }

  data[index + 3] = Math.round(originalAlpha * matte);

  if (matte < 1) {
    const safeMatte = Math.max(matte, 0.01);
    data[index] = Math.max(
      0,
      Math.min(255, Math.round((red - 255 * (1 - safeMatte)) / safeMatte)),
    );
    data[index + 1] = Math.max(
      0,
      Math.min(255, Math.round(green / safeMatte)),
    );
    data[index + 2] = Math.max(
      0,
      Math.min(255, Math.round((blue - 255 * (1 - safeMatte)) / safeMatte)),
    );
  }
}

const transparentSource = sharp(data, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
});

const fullLogo = await transparentSource
  .clone()
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({
    top: 28,
    right: 28,
    bottom: 28,
    left: 28,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .resize({ width: 1100, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toBuffer();

await fs.writeFile(path.join(publicBrand, "betha-logo-full.png"), fullLogo);
await sharp(fullLogo)
  .webp({ quality: 92, alphaQuality: 100 })
  .toFile(path.join(publicBrand, "betha-logo-full.webp"));

const emblem = await transparentSource
  .clone()
  .extract({ left: 345, top: 330, width: 565, height: 565 })
  .resize(512, 512, { fit: "contain" })
  .png({ compressionLevel: 9 })
  .toBuffer();

await fs.writeFile(path.join(publicBrand, "betha-mark.png"), emblem);

const iconCanvas = sharp({
  create: {
    width: 512,
    height: 512,
    channels: 4,
    background: { r: 252, g: 250, b: 245, alpha: 1 },
  },
}).composite([
  {
    input: await sharp(emblem).resize(450, 450, { fit: "contain" }).toBuffer(),
    left: 31,
    top: 31,
  },
]);

const icon512 = await iconCanvas.png({ compressionLevel: 9 }).toBuffer();
await fs.writeFile(path.join(publicBrand, "favicon-512.png"), icon512);
await fs.writeFile(path.join(appDir, "icon.png"), icon512);

const appleIcon = await sharp(icon512)
  .resize(180, 180)
  .png({ compressionLevel: 9 })
  .toBuffer();
await fs.writeFile(path.join(publicBrand, "apple-touch-icon.png"), appleIcon);
await fs.writeFile(path.join(appDir, "apple-icon.png"), appleIcon);

for (const size of [16, 32, 48, 192]) {
  await sharp(icon512)
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(path.join(publicBrand, `favicon-${size}.png`));
}

console.log("Betha Academy brand assets generated.");
