const fs = require('fs');
const https = require('https');
const path = require('path');

const directoryPath = path.join(__dirname, 'components');
const files = fs.readdirSync(directoryPath).filter(f => f.endsWith('.tsx'));

const urls = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(directoryPath, file), 'utf8');
  const urlMatches = content.match(/https:\/\/images\.unsplash\.com\/[^"'\s]+/g);
  if (urlMatches) {
    urlMatches.forEach(url => {
      urls.push({file, url});
    });
  }
});

let completed = 0;
urls.forEach(({file, url}) => {
  https.get(url, (res) => {
    if (res.statusCode >= 400 && res.statusCode !== 403) {
      console.log(`❌ Error ${res.statusCode} in ${file}: ${url}`);
    } else {
      console.log(`✅ OK ${res.statusCode} in ${file}`);
    }
  }).on('error', (e) => {
    console.error(`❌ Network Error in ${file}: ${url}`, e.message);
  });
});
