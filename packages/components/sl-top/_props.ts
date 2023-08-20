import { buildProps } from '@/utils/element-plus/props';

export const props = buildProps({
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
} as const);

export type IProps = typeof props;
