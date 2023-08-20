/* eslint-disable @typescript-eslint/no-var-requires */

const Types = ['ui', 'type', 'vitepress'];
const argv = process.argv;
const buildType = argv.splice(2)[0];

const buildPkg = require(`./pkg-types/${buildType}.js`);
if (Types.includes(buildType)) {
  buildPkg();
}
