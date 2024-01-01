import type { PropType } from 'vue';

/**
 * @summary
 * @description
 * @param src 图片路径
 * @param mode 填充模式, 默认aspectFill
 * @param width 默认100%
 * @param height 默认100%
 * @param lazyLoad 是否懒加载, 默认true
 * @param showMenuByLongpress 是否长按显示菜单
 * @param iconLib iconfont类名
 * @param loadingIcon 加载图标时的图标名
 * @param errorIcon 加载失败时的图标名
 * @param showLoading 加载图标时是否显示转圈圈
 * @param showError 加载失败时是否失败图
 * @param preview 是否可预览
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  src: {
    type: String,
    default: '',
  },
  mode: {
    type: String,
    default: 'aspectFill',
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '100%',
  },
  radius: {
    type: String as PropType<IRadius>,
    default: 'default',
  },
  lazyLoad: {
    type: Boolean,
    default: true,
  },
  showMenuByLongpress: {
    type: Boolean,
    default: true,
  },

  iconLib: {
    type: String,
    default: 'sl-ui-common',
  },
  loadingIcon: {
    type: String,
    default: 'icon_image',
  },
  errorIcon: {
    type: String,
    default: 'icon_image_fail',
  },

  showLoading: {
    type: Boolean,
    default: true,
  },
  showError: {
    type: Boolean,
    default: true,
  },
  bg: {
    type: String as PropType<IColor>,
    default: 'transparent',
  },

  preview: {
    type: Boolean,
    default: false,
  },
};
