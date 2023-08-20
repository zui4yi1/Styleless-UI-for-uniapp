import { buildProps } from '@/utils/element-plus/props';

export const props = buildProps({
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  thClz: {
    type: String,
    default: '',
  },
} as const);
