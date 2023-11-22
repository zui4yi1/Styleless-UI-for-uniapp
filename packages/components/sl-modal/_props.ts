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
  hasTitle: {
    type: Boolean,
    default: true,
  },
  cancelText: {
    type: String,
    default: '取消',
  },
  confirmText: {
    type: String,
    default: '确定',
  },
  hasClose: {
    type: Boolean,
    default: false,
  },
  hasCancel: {
    type: Boolean,
    default: true,
  },
  hasConfirm: {
    type: Boolean,
    default: true,
  },
  hasFoot: {
    type: Boolean,
    default: true,
  },
};
