import type { PropType } from 'vue';

export const props = {
  /**
   * @description inject global classNames to the component root
   */
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
    default: 40,
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
