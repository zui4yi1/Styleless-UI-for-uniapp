export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  name: {
    type: String,
    default: 'icon_check',
  },
  iconLib: {
    type: String,
    default: 'sl-ui-common',
  },
  iconClz: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  size: {
    type: Number,
    default: 28,
  },
  labelClz: {
    type: String,
    default: 'font-content color-content',
  },
};
