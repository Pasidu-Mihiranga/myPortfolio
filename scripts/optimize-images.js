import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join, extname, dirname, basename, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Go up one level from scripts folder to project root, then into public
const PUBLIC_DIR = resolve(__dirname, '..', 'public');
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png'];
const WEBP_QUALITY = 80;

async function getAllImages(dir) {
    const images = [];

    async function scanDir(currentDir) {
        try {
            const entries = await readdir(currentDir, { withFileTypes: true });

            for (const entry of entries) {
                const fullPath = join(currentDir, entry.name);

                if (entry.isDirectory()) {
                    await scanDir(fullPath);
                } else if (entry.isFile()) {
                    const ext = extname(entry.name).toLowerCase();
                    if (SUPPORTED_EXTENSIONS.includes(ext)) {
                        images.push(fullPath);
                    }
                }
            }
        } catch (error) {
            console.error(`Error scanning directory ${currentDir}:`, error.message);
        }
    }

    await scanDir(dir);
    return images;
}

async function convertToWebP(imagePath) {
    try {
        const dir = dirname(imagePath);
        const name = basename(imagePath, extname(imagePath));
        const webpPath = join(dir, `${name}.webp`);

        // Check if WebP already exists and is newer than source
        try {
            const sourceStat = await stat(imagePath);
            const webpStat = await stat(webpPath);

            if (webpStat.mtime > sourceStat.mtime) {
                console.log(`⏭️  Skipping (already optimized): ${imagePath}`);
                return { skipped: true, path: webpPath };
            }
        } catch {
            // WebP doesn't exist, proceed with conversion
        }

        await sharp(imagePath)
            .webp({ quality: WEBP_QUALITY })
            .toFile(webpPath);

        const originalSize = (await stat(imagePath)).size;
        const webpSize = (await stat(webpPath)).size;
        const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);

        console.log(`✅ Converted: ${basename(imagePath)} → ${basename(webpPath)} (${savings}% smaller)`);

        return { converted: true, path: webpPath, savings };
    } catch (error) {
        console.error(`❌ Error converting ${imagePath}:`, error.message);
        return { error: true, path: imagePath };
    }
}

async function main() {
    console.log('\n🖼️  Image Optimization Script');
    console.log('================================\n');
    console.log(`📁 Scanning: ${PUBLIC_DIR}\n`);

    const images = await getAllImages(PUBLIC_DIR);

    if (images.length === 0) {
        console.log('No images found to convert.');
        return;
    }

    console.log(`Found ${images.length} image(s) to process:\n`);

    let converted = 0;
    let skipped = 0;
    let errors = 0;

    for (const imagePath of images) {
        const result = await convertToWebP(imagePath);
        if (result.converted) converted++;
        if (result.skipped) skipped++;
        if (result.error) errors++;
    }

    console.log('\n================================');
    console.log(`📊 Summary: ${converted} converted, ${skipped} skipped, ${errors} errors`);
    console.log('================================\n');
}

main().catch(console.error);
