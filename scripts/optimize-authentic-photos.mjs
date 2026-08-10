import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDir = path.join(
  process.env.TEMP || "/tmp",
  "betha-curated",
  "betha-academy-curated-website",
);
const outputDir = path.join(
  process.cwd(),
  "public",
  "images",
  "school",
  "authentic",
);

const selected = [
  "01-group-outing-stone-steps.png",
  "03-sports-uniform-group-with-ball.png",
  "05-student-group-equator-nanyuki.png",
  "06-students-with-betha-academy-bus.png",
  "14-classroom-teacher-learning-materials.png",
  "15-classroom-pupils-refreshments.png",
  "16-school-community-outdoor-gathering.png",
  "32-school-pupils-outdoor-activity.png",
  "38-pupils-outdoor-assembly-seated.png",
  "39-pupils-outdoor-activity-with-teacher.png",
  "49-younger-pupils-group-outdoors.png",
  "50-school-gate-and-pupils-wide.png",
  "70-school-assembly-campus-wide.png",
  "71-students-around-outdoor-table.png",
  "72-student-group-singing.png",
  "76-student-drama-performance.png",
  "77-student-performing-before-school.png",
];

await fs.mkdir(outputDir, { recursive: true });

for (const file of selected) {
  const input = path.join(sourceDir, file);
  const output = path.join(outputDir, file.replace(/\.png$/i, ".webp"));
  const image = sharp(input).rotate();
  const meta = await image.metadata();
  const resized = image.resize({
    width: Math.min(meta.width || 1600, 1600),
    withoutEnlargement: true,
  });

  await resized.webp({ quality: 80 }).toFile(output);
  const outMeta = await sharp(output).metadata();
  const stats = await fs.stat(output);
  console.log(
    `${path.basename(output)} ${outMeta.width}x${outMeta.height} ${(stats.size / 1024).toFixed(0)}KB`,
  );
}
