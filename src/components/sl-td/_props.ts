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
  bg: {
    type: String as PropType<IColor>,
    default: 'white',
  },
  width: {
    type: String,
    default: '33%',
  },
  tdClz: {
    type: String,
    default: '',
  },
  align: {
    type: String,
    default: 'center',
  },
} as const);