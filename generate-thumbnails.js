#!/usr/bin/env node
/**
 * Generate thumbnails for all project screenshots
 * Creates 400x300 thumbnails for fast loading on projects page
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SOURCE_DIR = '/home/mark/CascadeProjects/greenspiritwebplatfrom/public/images/projectsscreenshots';
const THUMB_DIR = path.join(SOURCE_DIR, 'thumbnails');
const THUMB_WIDTH = 400;
const THUMB_HEIGHT = 300;

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function generateThumbnail(srcPath) {
  const relPath = path.relative(SOURCE_DIR, srcPath);
  const thumbPath = path.join(THUMB_DIR, relPath);
  const thumbDir = path.dirname(thumbPath);

  ensureDir(thumbDir);

  try {
    await sharp(srcPath)
      .resize(THUMB_WIDTH, THUMB_HEIGHT, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 80, progressive: true })
      .toFile(thumbPath);
    console.log(`✓ ${relPath}`);
    return true;
  } catch (err) {
    console.log(`✗ ${relPath}: ${err.message}`);
    return false;
  }
}

async function main() {
  ensureDir(THUMB_DIR);
  console.log(`Generating ${THUMB_WIDTH}x${THUMB_HEIGHT} thumbnails...\n`);

  const allPngs = [];
  function findPngs(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        findPngs(fullPath);
      } else if (entry.name.endsWith('.png')) {
        allPngs.push(fullPath);
      }
    }
  }

  findPngs(SOURCE_DIR);
  console.log(`Found ${allPngs.length} PNG files\n`);

  let success = 0;
  for (const png of allPngs) {
    if (await generateThumbnail(png)) success++;
  }

  console.log(`\n✅ ${success}/${allPngs.length} thumbnails generated`);
  console.log(`Output: ${THUMB_DIR}`);
}

main().catch(console.error);
