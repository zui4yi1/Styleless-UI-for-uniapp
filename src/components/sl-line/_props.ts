import { buildProps } from '@/utils/element-plus/props';
import type { PropType } from 'vue';

export const props = buildProps({
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  color: {
    type: String as PropType<IColor>,
    default: 'line-default',
  },
  length: {
    type: String,
    default: '100%',
  },
  direction: {
    type: String as PropType<'x' | 'y'>,
    default: 'x',
  },
  isHairLine: {
    type: Boolean,
    default: true,
  },
  lineStyle: {
    type: String as PropType<'solid' | 'dashed' | 'dotted'>,
    default: 'solid',
  },
} as const);
