export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  open: {
    type: Boolean,
    default: false,
  },
  closeOnTab: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  hasClose: {
    type: Boolean,
    default: false,
  },
  hasCancel: {
    type: Boolean,
    default: true,
  },
  hasFoot: {
    type: Boolean,
    default: true,
  },
};
