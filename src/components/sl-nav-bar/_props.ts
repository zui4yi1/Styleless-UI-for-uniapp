import type { PropType } from 'vue';

export const props = {
  /**
   * @description inject global classNames to the component root
   */
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
    default: 'common',
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
