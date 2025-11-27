import fs from "fs";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import sharp from "sharp";

const img1Path = "./images/input/image1.png";
const img2Path = "./images/input/image2.png";
const diffPath = "./images/output/diff.png";

async function run() {
  // Cargar ambas imágenes con sharp
  const i1 = sharp(img1Path);
  const i2 = sharp(img2Path);

  const meta1 = await i1.metadata();
  const meta2 = await i2.metadata();

  // Calculamos un tamaño común
  const targetWidth = Math.min(meta1.width, meta2.width);
  const targetHeight = Math.min(meta1.height, meta2.height);

  // Redimensionar ambas imágenes
  const b1 = await i1.resize(targetWidth, targetHeight).png().toBuffer();
  const b2 = await i2.resize(targetWidth, targetHeight).png().toBuffer();

  // Convertir a PNG.js
  const p1 = PNG.sync.read(b1);
  const p2 = PNG.sync.read(b2);

  const diff = new PNG({ width: targetWidth, height: targetHeight });

  const mismatchedPixels = pixelmatch(
    p1.data,
    p2.data,
    diff.data,
    targetWidth,
    targetHeight,
    { threshold: 0.1 }
  );

  fs.writeFileSync(diffPath, PNG.sync.write(diff));

  console.log("Diferencias detectadas:", mismatchedPixels);
  console.log("Diff image saved:", diffPath);
}

run();

