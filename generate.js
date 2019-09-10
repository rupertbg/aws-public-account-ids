const fs   = require("fs");
const path = require("path");
const ejs = require('ejs');
// const TurndownService = require('turndown')
// const turndownService = new TurndownService()

function generate() {
  const templateFile = fs.readFileSync(path.join(__dirname, 'index.ejs')).toString();
  const accounts = JSON.parse(fs.readFileSync(path.join(__dirname, 'accounts.json')).toString());
  const template = ejs.compile(templateFile);
  const html = template({ accounts });
  // const markdown = turndownService.turndown(html);
  return {
    html,
    // markdown
  }
};

const output = generate();
fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true })
fs.writeFileSync(path.join(__dirname, 'dist/index.html'), output.html);
// fs.writeFileSync(path.join(__dirname, 'dist/index.md'), output.markdown);
