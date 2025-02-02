const sharp = require('sharp');
const toIco = require('to-ico');
const path = require('path');
const fs = require('fs').promises;

const SOURCE_IMAGE = path.join(__dirname, 'static', 'raptor-logo.png');
const OUTPUT_DIR = path.join(__dirname, 'static');

// Define the sizes we need to generate
const SIZES = {
  favicon: [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 48, name: 'favicon-48x48.png' },
    { size: 192, name: 'android-chrome-192x192.png' },
    { size: 512, name: 'android-chrome-512x512.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 150, name: 'mstile-150x150.png' },
  ],
  social: [
    // Standard social media image size (1200x630 for FB/Twitter)
    { width: 1200, height: 630, name: 'seo.jpg' }
  ]
};

async function ensureOutputDir() {
  try {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

async function generateFavicons() {
  console.log('Generating favicons...');
  
  for (const { size, name } of SIZES.favicon) {
    await sharp(SOURCE_IMAGE)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(path.join(OUTPUT_DIR, name));
    
    console.log(`Generated ${name}`);
  }
}

async function generateSocialImages() {
  console.log('Generating social media images...');
  
  for (const { width, height, name } of SIZES.social) {
    await sharp(SOURCE_IMAGE)
      .resize(width, height, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      })
      .flatten({ background: { r: 0, g: 0, b: 0 } }) // Convert alpha to black
      .jpeg({
        quality: 90,
        chromaSubsampling: '4:4:4' // Better quality for text/logos
      })
      .toFile(path.join(OUTPUT_DIR, name));
    
    console.log(`Generated ${name}`);
  }
}

// Generate favicon.ico using to-ico package
async function generateFaviconIco() {
  console.log('Generating favicon.ico...');
  
  // Create both 16x16 and 32x32 PNGs for the ICO
  const sizes = [16, 32];
  const pngBuffers = await Promise.all(
    sizes.map(size => 
      sharp(SOURCE_IMAGE)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toBuffer()
    )
  );

  // Convert to ICO containing both sizes
  const icoBuffer = await toIco(pngBuffers);
  
  // Save the ICO file
  await fs.writeFile(path.join(OUTPUT_DIR, 'favicon.ico'), icoBuffer);
  
  console.log('Generated favicon.ico');
}

async function generateSafariPinnedTab() {
  console.log('Generating Safari pinned tab SVG...');
  
  // Create a simple SVG with transparent background
  const svgContent = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
     width="16pt" height="16pt" viewBox="0 0 16 16"
     preserveAspectRatio="xMidYMid meet">
  <g transform="translate(0,16) scale(0.1,-0.1)"
     fill="#000000" stroke="none">
    <!-- Simple raptor silhouette - you might want to customize this -->
    <path d="M80 120 l-30 -30 v-20 l30 30 l30 -30 v20 l-30 30"/>
  </g>
</svg>`;

  await fs.writeFile(path.join(OUTPUT_DIR, 'safari-pinned-tab.svg'), svgContent);
  console.log('Generated safari-pinned-tab.svg');
}

async function main() {
  try {
    await ensureOutputDir();
    await generateFavicons();
    await generateSocialImages();
    await generateFaviconIco();
    await generateSafariPinnedTab();
    console.log('All assets generated successfully!');
  } catch (error) {
    console.error('Error generating assets:', error);
    process.exit(1);
  }
}

main();