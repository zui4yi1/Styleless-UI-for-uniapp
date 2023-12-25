export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  /** 高度的尺寸 */
  height: {
    type: Number,
    default: 56,
  },
  /** 中间矩形宽度，实际的switch宽度为 height+width */
  width: {
    type: Number,
    default: 40,
  },

  value: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  bodyClz: {
    type: String,
    default: '',
  },
};
