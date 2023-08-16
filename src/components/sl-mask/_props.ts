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
  open: {
    type: Boolean,
    default: false,
  },
  closeOnTab: {
    type: Boolean,
    default: true,
  },
  mode: {
    type: String as PropType<'left' | 'bottom' | 'right' | 'top' | 'center'>,
    default: 'bottom',
  },
  /**
   * @description 宽度,需自带单位, 仅mode为center时应用
   */
  width: {
    type: String,
    default: '66%',
  },
} as const);
