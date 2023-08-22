export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  /** 高度的尺寸 should be times of 4 */
  height: {
    type: Number,
    default: 56,
  },
  /** 相对高度的偏移，即实际宽度为 height+widthOffset */
  widthOffset: {
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
};
