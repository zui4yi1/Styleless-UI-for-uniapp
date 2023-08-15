import { buildProps } from '@/utils/element-plus/props';

export const props = buildProps({
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  xxx: {
    type: String,
    default: '',
  },
  /**
   * @description 表头
   */
  isTh: {
    type: Boolean,
    default: false,
  },
} as const);
