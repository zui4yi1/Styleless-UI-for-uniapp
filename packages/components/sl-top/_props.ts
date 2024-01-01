export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  isCustomNavBar: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 88rpx
   */
  customNavBarHeight: {
    type: Number,
    default: 88,
  },
  bodyClz: {
    type: String,
    default: '',
  },
};

export type IProps = typeof props;
