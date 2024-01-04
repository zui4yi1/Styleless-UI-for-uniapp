/* eslint-disable @typescript-eslint/no-var-requires */
const fse = require('fs-extra');
const path = require('path');

const root = process.cwd();
const srcRoot = path.join(root, 'src');
const docsRoot = path.join(root, 'docs');
const mdDir = path.join(docsRoot, 'md');
// const mdConfFile = path.join(docsRoot, '.vitepress/config.js');
const confJson = path.join(srcRoot, 'examples/index/pages.json');

const confs = require(confJson);
const buildPkg = async () => {
  fse.removeSync(mdDir);
  fse.mkdirSync(mdDir);
  const files = await fse.readdir(path.join(srcRoot, 'components'));
  files.forEach((fileName) => {
    const mdPath = 'components/' + fileName + '/index.md';
    if (fse.existsSync(path.join(srcRoot, mdPath))) {
      fse.copyFileSync(path.join(srcRoot, mdPath), path.join(mdDir, fileName + '.md'));
    }
  });
};

module.exports = buildPkg;
