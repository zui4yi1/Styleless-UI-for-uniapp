import { buildProps } from '@/utils/element-plus/props';

export const props = buildProps({
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  paddingClz: {
    type: String,
    default: 'plr-l ptb-d',
  },
} as const);
