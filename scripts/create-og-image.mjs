import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const width = 1200;
const height = 630;
const outputDir = path.join(root, "public", "images", "share");
const output = path.join(outputDir, "betha-academy-og.jpg");

const photo = path.join(
  root,
  "public",
  "images",
  "school",
  "01-main-gate-with-learners.webp",
);
const logo = path.join(root, "public", "brand", "betha-logo-full.png");

await fs.mkdir(outputDir, { recursive: true });

const background = await sharp(photo)
  .resize(width, height, { fit: "cover", position: "attention" })
  .toBuffer();

const logoBuffer = await sharp(logo)
  .resize({ height: 118, fit: "inside", withoutEnlargement: true })
  .png()
  .toBuffer();

const overlay = Buffer.from(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0.15">
      <stop offset="0%" stop-color="#0f342b" stop-opacity="0.88"/>
      <stop offset="48%" stop-color="#0f342b" stop-opacity="0.58"/>
      <stop offset="100%" stop-color="#0f342b" stop-opacity="0.18"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#shade)"/>
  <text x="72" y="318" font-family="Georgia, 'Times New Roman', serif" font-size="68" font-weight="700" fill="#ffffff">Betha Academy</text>
  <text x="72" y="372" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#f4e7b0">Nurturing Excellence, Character &amp; Responsibility</text>
  <text x="72" y="422" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#d7ebe3">Timau, Meru County</text>
</svg>`);

await sharp(background)
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: logoBuffer, top: 58, left: 72 },
  ])
  .jpeg({ quality: 84, progressive: true, mozjpeg: true })
  .toFile(output);

const info = await sharp(output).metadata();
const stats = await fs.stat(output);
console.log(
  JSON.stringify(
    {
      output: path.relative(root, output).replaceAll("\\", "/"),
      width: info.width,
      height: info.height,
      format: info.format,
      bytes: stats.size,
    },
    null,
    2,
  ),
);
