/**
 * @summary 筛选组件
 * @description 即插即拔模式, 即选项是通过sl-dropdown-item自身控制的, 本身无list参数
 * @param scroll 是否滚动, 即多个时有滚动条, 若为false则是居中对齐模式
 */

export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  scroll: {
    type: Boolean,
    default: true,
  },
};
