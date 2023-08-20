/* eslint-disable @typescript-eslint/no-var-requires */
const fse = require('fs-extra');
const path = require('path');

const root = process.cwd();
const srcRoot = path.join(root, 'src');
const packageRoot = path.join(root, 'packages');

const buildPkg = () => {
  fse.removeSync(path.join(packageRoot, 'hooks'));
  fse.removeSync(path.join(packageRoot, 'components'));
  fse.removeSync(path.join(packageRoot, 'utils'));
  fse.copySync(path.join(srcRoot, 'hooks'), path.join(packageRoot, 'hooks'));
  fse.copySync(path.join(srcRoot, 'components'), path.join(packageRoot, 'components'));
  fse.copySync(path.join(srcRoot, 'utils'), path.join(packageRoot, 'utils'));
};

module.exports = buildPkg;
