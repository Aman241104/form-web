const fs = require('fs');
const path = require('path');

const files = [
  'data/siteData.tsx',
  'components/Testimonials.tsx',
  'components/ServiceDetailClient.tsx',
  'components/IndustryDetailClient.tsx',
  'components/IndustriesPageClient.tsx',
  'components/HowWeWork.tsx',
  'components/Leadership.tsx',
  'components/Hero.tsx',
  'components/Overview.tsx',
  'components/WhyUs.tsx',
  'components/Security.tsx',
  'components/TrustTicker.tsx',
  'components/Accreditations.tsx'
];

const urlRegex = /https:\/\/images\.unsplash\.com\/photo-[^?"]+/g;

async function checkUrls() {
  const urls = new Set();
  for (const file of files) {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      const matches = content.match(urlRegex);
      if (matches) {
        matches.forEach(url => urls.add(url));
      }
    }
  }

  console.log(`Checking ${urls.size} unique Unsplash URLs...`);

  for (const url of urls) {
    try {
      const response = await fetch(url + '?auto=format&fit=crop&w=10&q=10');
      if (response.ok) {
        // console.log(`✅ ${url}`);
      } else {
        console.log(`❌ ${url} - Status: ${response.status}`);
      }
    } catch (error) {
      console.log(`💥 ${url} - Error: ${error.message}`);
    }
  }
}

checkUrls();
