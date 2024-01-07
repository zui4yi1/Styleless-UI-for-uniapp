/* eslint-disable @typescript-eslint/no-var-requires */
const fse = require('fs-extra');
const { camelCase, upperFirst } = require('lodash');
const path = require('path');

const root = process.cwd();
const srcRoot = path.join(root, 'src');
const packageRoot = path.join(root, 'packages');

const buildPkg = async () => {
  const files = await fse.readdir(path.join(srcRoot, 'components'));

  const imports = [];
  const props = [];

  files.forEach((fileName) => {
    const keyName = upperFirst(camelCase(fileName));
    imports.push(`import ${keyName} from '../components/${fileName}/${fileName}.vue'; `);
    props.push(`'${fileName}': typeof ${keyName};`);
  });

  fse.writeFileSync(
    `${path.join(packageRoot, 'types')}/index.d.ts`,
    `${imports.join('\n')}
    import '@vue/runtime-core';
    declare module '@vue/runtime-core' {
      export interface GlobalComponents {
        ${props.join('\n')}
      }
    }
  `,
  );
};

module.exports = buildPkg;
