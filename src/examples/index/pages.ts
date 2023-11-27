const pages = [
  {
    title: '系统类',
    type: 'sys',
    list: [
      { componentName: 'sl-page', componentDesc: '页面根节点', url: '/examples/page/index' },
      { componentName: 'sl-nav-bar', componentDesc: '自定义导航栏', url: '/examples/navbar/index' },
      {
        componentName: 'sl-scroll-refresher',
        componentDesc: '列表组件, 下拉刷新+触底加载',
        url: '/examples/scroll-refresher/index',
      },
    ],
  },
  {
    title: '表单类',
    type: 'form',
    list: [
      { componentName: 'sl-button', componentDesc: '按钮', url: '/examples/button/index' },
      { componentName: 'sl-input', componentDesc: '输入框', url: '/examples/input/index' },
      { componentName: 'sl-checkbox', componentDesc: '复选框', url: '/examples/checkbox/index' },
      { componentName: 'sl-radio', componentDesc: '单选框', url: '/examples/radio/index' },
      { componentName: 'sl-switch', componentDesc: '开关', url: '/examples/switch/index' },
      {
        componentName: 'sl-form',
        componentDesc: 'form表单组件, 加强版',
        url: '/examples/form/index',
      },
    ],
  },
  {
    title: '图片图标类',
    type: 'image',
    list: [
      { componentName: 'sl-image', componentDesc: '图片', url: '/examples/image/index' },
      { componentName: 'sl-icon', componentDesc: 'svg矢量小图标', url: '/examples/icon/index' },
    ],
  },
  {
    title: '弹窗类',
    type: 'modal',
    list: [
      { componentName: 'sl-mask', componentDesc: '遮罩', url: '/examples/mask/index' },
      { componentName: 'sl-popup', componentDesc: '底部弹窗', url: '/examples/popup/index' },
      { componentName: 'sl-modal', componentDesc: '中间模态弹窗', url: '/examples/modal/index' },
      { componentName: 'sl-select', componentDesc: '下拉框弹窗', url: '/examples/select/index' },
      {
        componentName: 'sl-action-sheet',
        componentDesc: '操作选择弹窗',
        url: '/examples/action-sheet/index',
      },
    ],
  },
  {
    title: '布局/容器类',
    type: 'layout',
    list: [
      { componentName: 'sl-table', componentDesc: '表格', url: '/examples/table/index' },
      { componentName: 'sl-grid', componentDesc: '栅格', url: '/examples/grid/index' },
      { componentName: 'sl-space', componentDesc: '空间', url: '/examples/space/index' },
      { componentName: 'sl-dropdown', componentDesc: '组合筛选', url: '/examples/dropdown/index' },
      { componentName: 'sl-tabs', componentDesc: '标签页', url: '/examples/tabs/index' },
      { componentName: 'sl-card', componentDesc: '卡片', url: '/examples/card/index' },
      {
        componentName: 'sl-address-book',
        componentDesc: '通讯录',
        url: '/examples/address-book/index',
      },
      {
        componentName: 'sl-top/sl-bottom',
        componentDesc: '固定顶部/底部',
        url: '/examples/top/index',
      },
    ],
  },
  {
    title: '其它',
    type: 'other',
    list: [
      { componentName: 'sl-line', componentDesc: '线', url: '/examples/line/index' },
      { componentName: 'sl-empty', componentDesc: '无数据提示', url: '/examples/empty/index' },
      {
        componentName: 'sl-fill-line',
        componentDesc: '填充行',
        url: '/examples/fill-line/index',
      },
      { componentName: 'sl-search', componentDesc: '搜索', url: '/examples/search/index' },
      { componentName: 'sl-tags', componentDesc: '标签', url: '/examples/tags/index' },
    ],
  },
];

export default pages;
