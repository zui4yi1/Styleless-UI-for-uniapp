// 原子样式在此配置

/**
 * @typedef {Object} IOption
 * @property {String} key 字段名
 * @property {String} value 值
 * @property {String} desc 描述, 若有则以注释的方式展示
 * @property {String} abbreviation 缩写, 若不为空生成的类名以缩写为准，否则以key为准
 * @property {Array<IOption} extends 当key为color时可能有扩展或衍生颜色
 */

/**
 * @typedef {Object} IProps
 * @property {'font-family'|'color'|'mask'|'shadow'|'font-size'|'gap'|'height'|'radius'} type 分类
 * @property {'main'|'border'|'bg'}
 * @property {String} summary 描述,会以注释的方式展示
 * @property {Array<IOption>} items 数据列表
 */

/**
 * @typedef {Object} IConf
 * @property {string} theme 主题类型, 作为主题的前缀, 默认ui
 * @property {boolean} isMutilTheme 是否多主题, 默认false. 若为多主题, 则使用时务必仅使用js来使用样式组件
 * @property {Array<IProps>} list 配置列表
 */

/**
 * @type {IConf}
 */
const conf = {
  theme: 'ui',
  isMutilTheme: false,
  list: [],
};

// 字体家族
conf.list.push({
  type: 'font-family',
  summary: '字体家族',
  items: [
    { key: 'regular', value: "'PingFangSC-Regular'" },
    { key: 'medium', value: "'PingFangSC-Medium' " },
  ],
});

// 品牌主色
conf.list.push({
  type: 'color',
  summary: '品牌主色',
  items: [
    {
      key: 'primary',
      value: '#ee22cc',
      extends: [
        {
          key: 'primary-hover',
          value: '#ff1cdd',
        },
        {
          key: 'primary-disabled',
          value: '#ff1cdd',
        },
        {
          key: 'primary-dark-1',
          value: '#ff11dd',
        },
        {
          key: 'primary-light-1',
          value: '#ee13dd',
        },
        {
          key: 'primary-light-2',
          value: '#ff1cdd',
        },
        {
          key: 'primary-light-3',
          value: '#ff1fdd',
        },
      ],
    },
  ],
});
// 通用主色
conf.list.push({
  type: 'color',
  summary: '通用主色',
  items: [
    {
      key: 'white',
      value: '#ffffff',
      extends: [
        {
          key: 'white-hover',
          value: '#93beff',
        },
        {
          key: 'white-disabled',
          value: '#93beff',
        },
        {
          key: 'white-dark-1',
          value: '#e8f3ff',
        },
        {
          key: 'white-light-1',
          value: '#ffffff',
        },
        {
          key: 'white-light-2',
          value: '#93beff',
        },
        {
          key: 'white-light-3',
          value: '#f7f7f7',
        },
      ],
    },
    {
      key: 'black',
      value: '#000000',
      extends: [
        {
          key: 'black-hover',
          value: '#000000',
        },
        {
          key: 'black-disabled',
          value: '#000000',
        },
        {
          key: 'black-dark-1',
          value: '#000000',
        },
        {
          key: 'black-light-1',
          value: '#000000',
        },
        {
          key: 'black-light-2',
          value: '#000000',
        },
        {
          key: 'black-light-3',
          value: '#000000',
        },
      ],
    },
    {
      key: 'transparent',
      value: 'transparent',
      extends: [
        {
          key: 'transparent-hover',
          value: 'transparent',
        },
        {
          key: 'transparent-disabled',
          value: 'transparent',
        },
        {
          key: 'transparent-dark-1',
          value: 'transparent',
        },
        {
          key: 'transparent-light-1',
          value: 'transparent',
        },
        {
          key: 'transparent-light-2',
          value: 'transparent',
        },
        {
          key: 'transparent-light-3',
          value: 'transparent',
        },
      ],
    },
  ],
});

// 字体颜色
conf.list.push({
  type: 'color',
  summary: '字体颜色',
  items: [
    { key: 'base', value: '#1d2129' },
    { key: 'secondary', value: '#1d2129' },
    { key: 'placeholder', value: '#1d2129' },
    { key: 'disabled', value: '#1d2129' },
  ],
});

// 边框颜色
conf.list.push({
  type: 'color',
  summary: '边框颜色',
  items: [
    {
      key: 'line-light',
      value: '#f3f3f3',
    },
    {
      key: 'line-default',
      value: '#c3c3c3',
    },
    {
      key: 'line-deep',
      value: '#a1a1a1',
    },
  ],
});

// 背景颜色
conf.list.push({
  type: 'color',
  summary: '背景颜色',
  items: [
    {
      key: 'fill-light',
      value: '#d1d1d1',
    },
    {
      key: 'fill-default',
      value: '#b1b1b1',
    },
    {
      key: 'fill-deep',
      value: '#919191',
    },
  ],
});

// 遮罩颜色
conf.list.push({
  type: 'mask',
  summary: '遮罩颜色',
  items: [
    { key: 'default', value: 'rgba(0,0,0,0.3)' },
    { key: 'deep', value: 'rgba(0,0,0,0.75)' },
  ],
});

// 阴影颜色
conf.list.push({
  type: 'shadow',
  summary: '阴影颜色',
  items: [{ key: 'default', value: 'xxxxxxxx' }],
});

// 字体尺寸
conf.list.push({
  type: 'font-size',
  summary: '字体尺寸',
  items: [
    { key: 'desc', value: '20rpx' },
    { key: 'secondary', value: '24rpx' },
    { key: 'content', value: '28rpx' },
    { key: 'header', value: '30rpx' },
    { key: 'title', value: '34rpx' },
    { key: 'xt', value: '40rpx' },
    { key: 'xxt', value: '48rpx' },
  ],
});
// 间距
conf.list.push({
  type: 'gap',
  summary: '间距',
  items: [
    { key: 'xs', value: '8rpx' },
    { key: 'small', value: '16rpx', abbreviation: 's' },
    { key: 'default', value: '24rpx', abbreviation: 'd' },
    { key: 'large', value: '32rpx', abbreviation: 'l' },
    { key: 'xl', value: '40rpx' },
  ],
});

// 高度
conf.list.push({
  type: 'height',
  summary: '高度',
  items: [
    { key: 'button-default', value: '96rpx' },
    { key: 'button-small', value: '64rpx' },
    { key: 'cell-default', value: '88rpx' },
    { key: 'cell-large', value: '120rpx' },
  ],
});

// 圆角
conf.list.push({
  type: 'radius',
  summary: '圆角',
  items: [
    { key: 'none', value: '0' },
    { key: 'round', value: '50%' },
    { key: 'small', value: '8rpx' },
    { key: 'default', value: '12rpx' },
    { key: 'large', value: '20rpx' },
    { key: 'xl', value: '32rpx' },
    { key: 'cell-default', value: '44rpx' },
  ],
});

// 还缺少样式值的js文件

module.exports = conf;
