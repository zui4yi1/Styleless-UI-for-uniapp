import { buildProps } from '@/utils/element-plus/props';
import type { PropType } from 'vue';

export const props = buildProps({
  /**
   * @description inject global classNames to the component root
   */
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
    type: [String, Number],
    default: '100%',
  },
  height: {
    type: [String, Number],
    default: 'auto',
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
  index: {
    type: Number,
    default: 0,
  },
  previewImage: {
    type: Boolean,
    default: false,
  },
} as const);
