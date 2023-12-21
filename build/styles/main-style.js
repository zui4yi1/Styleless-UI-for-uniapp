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
    { key: 'medium', value: "'PingFangSC-Medium'" },
  ],
});

// 品牌主色
conf.list.push({
  type: 'color',
  summary: '品牌主色',
  items: [
    {
      key: 'primary',
      value: '#3433e6',
      extends: [
        {
          key: 'primary-hover',
          value: '#8585f0',
        },
      ],
    },
    {
      key: 'success',
      value: '#02ca33',
      extends: [
        {
          key: 'success-hover',
          value: '#67df85',
        },
      ],
    },
    {
      key: 'warning',
      value: '#feea31',
      extends: [
        {
          key: 'warning-hover',
          value: '#fef283',
        },
      ],
    },
    {
      key: 'error',
      value: '#f81409',
      extends: [
        {
          key: 'error-hover',
          value: '#fb726b',
        },
      ],
    },
    {
      key: 'pink',
      value: '#e87a7a',
      extends: [
        {
          key: 'pink-hover',
          value: '#f1afaf',
        },
      ],
    },
    {
      key: 'blue',
      value: '#2f9eca',
      extends: [
        {
          key: 'blue-hover',
          value: '#82c5df',
        },
      ],
    },
  ],
});
// 通用主色;
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
          value: '#ffffff',
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
      ],
    },
  ],
});

// 字体颜色
conf.list.push({
  type: 'color',
  summary: '字体颜色',
  items: [
    { key: 'content', value: '#303030' },
    { key: 'secondary', value: '#909090' },
    { key: 'placeholder', value: '#a0a0a0' },
    { key: 'disabled', value: '#c0c0c0' },
  ],
});

// 边框颜色
conf.list.push({
  type: 'color',
  summary: '边框颜色',
  items: [
    {
      key: 'line-light',
      value: '#e4e4e4',
    },
    {
      key: 'line-default',
      value: '#c3c3c3',
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
      value: '#f5f5f5',
    },
    {
      key: 'fill-default',
      value: '#f0f0f0',
    },
    {
      key: 'fill-deep',
      value: '#ebebeb',
    },
  ],
});

// 遮罩颜色
conf.list.push({
  type: 'mask',
  summary: '遮罩颜色',
  items: [
    { key: 'default', value: 'rgba(0,0,0,0.3)' },
    { key: 'deep', value: 'rgba(0,0,0,0.5)' },
  ],
});

// 阴影颜色
conf.list.push({
  type: 'shadow',
  summary: '阴影颜色',
  items: [{ key: 'default', value: '0 2px 2px rgba(0, 0, 0, 0.1)' }],
});

// 字体尺寸
conf.list.push({
  type: 'font-size',
  summary: '字体尺寸',
  items: [
    { key: 'desc', value: '20rpx' },
    { key: 'secondary', value: '24rpx' },
    { key: 'content', value: '28rpx' },
    { key: 'header', value: '32rpx' },
    { key: 'title', value: '36rpx' },
    { key: 'xt', value: '40rpx' },
    { key: 'xxt', value: '48rpx' },
  ],
});
// 间距
conf.list.push({
  type: 'gap',
  summary: '间距',
  items: [
    { key: 'none', value: '0px' },
    { key: 'xxs', value: '4rpx' },
    { key: 'xs', value: '8rpx' },
    { key: 's', value: '16rpx' },
    { key: 'd', value: '24rpx' },
    { key: 'l', value: '32rpx' },
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

module.exports = conf;
