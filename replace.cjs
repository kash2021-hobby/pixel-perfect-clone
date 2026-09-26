const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace exactly 'text-brand' but not 'text-brand-dark' or 'bg-text-brand' (if that existed)
    // We look for text-brand surrounded by space, quote, or backtick
    const regex = /(^|[\s"'`])text-brand([\s"'`])/g;
    let newContent = content.replace(regex, '$1text-secondary$2');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Updated', filePath);
    }
  }
});
