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
  title: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<IFont>,
    default: 'content',
  },
  list: {
    type: Array as PropType<{ text: string; color: IColor; disabled: boolean }[]>,
    default: () => [],
  },
} as const);
