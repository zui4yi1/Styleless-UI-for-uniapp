import type { PropType } from 'vue';

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
    type: [String, Number],
    default: '100%',
  },
  height: {
    type: [String, Number],
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
