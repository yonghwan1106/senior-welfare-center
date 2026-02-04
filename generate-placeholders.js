const fs = require('fs');
const path = require('path');

const programs = [
    { name: 'caregiver', color: '#4F46E5', text: '요양보호사' },
    { name: 'sports', color: '#EA580C', text: '노인체육' },
    { name: 'exercise', color: '#10B981', text: '실버체조' },
    { name: 'walking', color: '#059669', text: '건강걷기' },
    { name: 'smartphone', color: '#2563EB', text: '스마트폰' },
    { name: 'kiosk', color: '#7C3AED', text: '키오스크' },
    { name: 'calligraphy', color: '#DB2777', text: '서예교실' },
    { name: 'silversitter', color: '#D97706', text: '실버시터' }
];

const galleries = [
    { name: 'yearend-2025', color: '#DC2626', text: '송년행사' },
    { name: 'caregiver-grad', color: '#4F46E5', text: '수료식' },
    { name: 'walking-event', color: '#059669', text: '걷기대회' },
    { name: 'calligraphy-exhibit', color: '#DB2777', text: '전시회' },
    { name: 'spring-outing', color: '#F59E0B', text: '봄나들이' },
    { name: 'parents-day', color: '#EC4899', text: '어버이날' },
    { name: 'volunteer', color: '#6366F1', text: '봉사활동' },
    { name: 'silversitter-start', color: '#D97706', text: '발대식' }
];

const generateSVG = (text, color) => `
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}" fill-opacity="0.1"/>
  <rect width="100%" height="100%" fill="url(#pattern)" fill-opacity="0.05"/>
  <defs>
    <pattern id="pattern" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="1" fill="#000"/>
    </pattern>
  </defs>
  <text x="50%" y="50%" font-family="sans-serif" font-size="48" font-weight="bold" fill="${color}" text-anchor="middle" dy=".3em">${text}</text>
  <text x="50%" y="60%" font-family="sans-serif" font-size="24" fill="#666" text-anchor="middle" dy=".3em">Placeholder Image</text>
</svg>
`.trim();

// Ensure directories exist
const dirs = [
    'public/images/programs',
    'public/images/gallery'
];

dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Generate Program Images
programs.forEach(prog => {
    const filePath = path.join('public/images/programs', `${prog.name}.svg`);
    fs.writeFileSync(filePath, generateSVG(prog.text, prog.color));
    console.log(`Generated: ${filePath}`);
});

// Generate Gallery Images (Thumbnails + 3 sub images)
galleries.forEach(gal => {
    // Thumbnail
    const filePath = path.join('public/images/gallery', `${gal.name}.svg`);
    fs.writeFileSync(filePath, generateSVG(gal.text, gal.color));
    console.log(`Generated: ${filePath}`);

    // Sub images (1 to 3)
    for (let i = 1; i <= 3; i++) {
        const subPath = path.join('public/images/gallery', `${gal.name}-${i}.svg`);
        fs.writeFileSync(subPath, generateSVG(`${gal.text} ${i}`, gal.color));
        console.log(`Generated: ${subPath}`);
    }
});
