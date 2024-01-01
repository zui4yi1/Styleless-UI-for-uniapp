import type { PropType } from 'vue';

/**
 * @summary 导航栏组件
 * @description 可自动显示home或left图标
 * @param title 标题
 * @param showTitle 是否显示标题文本, 默认true
 * @param autoHomeOrLeftIcon 左侧是否自动控制home或left图标
 * @param iconColor 左图标的颜色类型, 默认content
 * @param iconSize 左图标的尺寸, 默认48
 * @param iconLib 左图标的图标库, 默认sl-ui-common
 * @param filterPages 不需要在左侧显示图标的页面, 一般是登录页及各大首页
 * @param homePath 主页,即点击home图标后relauch的页面
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  bg: {
    type: String as PropType<IColor>,
    default: 'white',
  },
  color: {
    type: String as PropType<IColor>,
    default: 'content',
  },
  showTitle: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 是否自动在左侧显示主页或上一页的图标
   */
  autoHomeOrLeftIcon: {
    type: Boolean,
    default: true,
  },
  iconColor: {
    type: String as PropType<IColor>,
    default: 'content',
  },
  iconSize: {
    type: Number,
    default: 48,
  },
  iconLib: {
    type: String,
    default: 'sl-ui-common',
  },
  /**
   * @description 不需要在左侧显示图标的页面, 一般是登录页及各大首页
   */
  filterPages: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  homePath: {
    type: String,
    default: '',
  },
};
