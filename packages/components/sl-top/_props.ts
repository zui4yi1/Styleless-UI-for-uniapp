export const props = {
  /**
   * @description inject global classNames to the component root
   */
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
};

export type IProps = typeof props;
