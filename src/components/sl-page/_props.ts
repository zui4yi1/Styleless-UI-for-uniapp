import type { PropType } from 'vue';

/**
 * @summary 页面根结点组件
 * @description 可自动显示home或left图标
 * @param showNavBar 是否显示导航栏
 * @param navBarBg 导航栏背景,IColor, 默认white
 * @param navBarColor 导航栏标题颜色, 默认content
 * @param safeBottomPadding 是否自动填充安全底部的空白, 默认true
 * @param pageLoadingStatus 页面加载状态, 0-加载中，1-成功，2-或失败, 默认1
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
  bg: {
    type: String as PropType<IColor>,
    default: 'white',
  },
  title: {
    type: String,
    default: '',
  },
  showNavBar: {
    type: Boolean,
    default: true,
  },
  navBarBg: {
    type: String as PropType<IColor>,
    default: 'white',
  },
  navBarColor: {
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

  /**
   * @description 是否自动填充安全底部的空白
   */
  safeBottomPadding: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 告诉页面的加载状态，是加载中，成功，或失败，以便显示不同的slot
   * @description tell page the status, 0-loading, 1-success, 2-error
   */
  pageLoadingStatus: {
    type: Number as PropType<0 | 1 | 2>,
    default: 1,
  },
};
