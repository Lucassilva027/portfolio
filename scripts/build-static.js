const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const { buildViewModel } = require("../src/controllers/homeController");

const ROOT = path.join(__dirname, "..");
const VIEWS = path.join(ROOT, "src", "views");
const PUBLIC = path.join(ROOT, "public");
const DIST = path.join(ROOT, "dist");
const TEMPLATE = path.join(VIEWS, "index.ejs");

const PAGES = [
  { locale: "en", outFile: path.join(DIST, "index.html") },
  { locale: "pt", outFile: path.join(DIST, "pt", "index.html") }
];

function emptyDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function copyPublic() {
  fs.cpSync(PUBLIC, DIST, { recursive: true });
}

async function renderPage(locale, outFile) {
  const html = await ejs.renderFile(TEMPLATE, buildViewModel(locale), {
    root: VIEWS,
    views: [VIEWS],
    filename: TEMPLATE
  });

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html, "utf8");
  console.log(`Wrote ${path.relative(ROOT, outFile)}`);
}

async function main() {
  emptyDir(DIST);
  copyPublic();

  for (const page of PAGES) {
    await renderPage(page.locale, page.outFile);
  }

  console.log("Static build ready in dist/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
