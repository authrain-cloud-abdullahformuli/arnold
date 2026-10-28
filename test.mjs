import assert from "node:assert/strict";
import fs from "node:fs";

console.log("Running Arnold sanity tests...");

const requiredFiles = [
  "README.md",
  "LICENSE",
  "NOTICE",
  "package.json",
  "pyproject.toml",
  "MAINTAINERS.md",
  "CITATION.cff",
  "arnold/__init__.py",
  "arnold_pipelines/__init__.py",
  "arnold_pipelines/megaplan/__init__.py",
  "arnold_pipelines/megaplan/__main__.py"
];

for (const file of requiredFiles) {
  assert.ok(fs.existsSync(file), `Expected ${file} to exist`);
}

const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));
assert.equal(pkg.name, "arnold");
assert.ok(pkg.author.includes("Abdullah Formuli <authrainmedia@gmail.com>"));
assert.equal(pkg.license, "Apache-2.0");

const notice = fs.readFileSync("NOTICE", "utf-8");
assert.ok(notice.includes("Copyright (c) 2026 Abdullah Formuli"));

const maintainers = fs.readFileSync("MAINTAINERS.md", "utf-8");
assert.ok(maintainers.includes("Abdullah Formuli"));

const pyproject = fs.readFileSync("pyproject.toml", "utf-8");
assert.ok(pyproject.includes("Abdullah Formuli"));

console.log(`✅ All ${requiredFiles.length} structural files verified.`);
console.log("✅ Python project configurations verified.");
console.log("✅ Sanity test passed successfully!");
