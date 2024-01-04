/* eslint-disable @typescript-eslint/no-var-requires */
const fse = require('fs-extra');
const path = require('path');

const root = process.cwd();
const srcRoot = path.join(root, 'src');
const docsRoot = path.join(root, 'docs');
const mdDir = path.join(docsRoot, 'components');
const mdConfFile = path.join(docsRoot, '.vitepress/config.js');
const confJson = path.join(srcRoot, 'examples/index/pages.json');

const confs = require(confJson);

const buildPkg = async () => {
  // 拷贝组件md文件
  fse.removeSync(mdDir);
  fse.mkdirSync(mdDir);
  const files = await fse.readdir(path.join(srcRoot, 'components'));
  files.forEach((fileName) => {
    const mdPath = 'components/' + fileName + '/index.md';
    if (fse.existsSync(path.join(srcRoot, mdPath))) {
      fse.copyFileSync(path.join(srcRoot, mdPath), path.join(mdDir, fileName + '.md'));
    } else {
      // console.info('aaa', fileName);
    }
  });
  // 生成config.js配置
  // 1. 导航
  const guideMenu = [
    {
      text: '开始',
      items: [
        { text: '简介', link: 'guides/introduction' },
        { text: '快速上手', link: 'guides/quick-start' },
      ],
    },
  ];

  // 2. 生成组件md的菜单配置
  const componentMenu = confs.map((c) => {
    const { title: text, list } = c;
    return {
      text,
      items: list.map((item) => {
        const { componentName, componentDesc } = item;
        return {
          text: componentName + ' ' + componentDesc,
          link: 'components/' + componentName,
        };
      }),
    };
  });

  // 3. 生成文件
  fse.writeFileSync(
    mdConfFile,
    `module.exports = {
        title: 'Styleless UI',
        themeConfig: {
          siteTitle: 'Styleless UI',
          sidebar: ${JSON.stringify([...guideMenu, ...componentMenu])}
        }
    }     
  `,
  );
};

module.exports = buildPkg;
