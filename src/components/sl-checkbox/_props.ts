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
  direction: {
    type: String as PropType<'x' | 'y'>,
    default: 'x',
  },
  value: {
    type: Array,
    default: () => [],
  },
  list: {
    type: Array as PropType<{ label: string; value: any }[]>,
    default: () => [],
  },
  type: {
    type: String as PropType<'circle' | 'square'>,
    default: 'circle',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: Number,
    default: 28,
  },
  labelClz: {
    type: String,
    default: 'font-content color-base',
  },
  iconName: {
    type: String,
    default: 'icon_check',
  },
  iconLib: {
    type: String,
    default: 'sl-ui-common',
  },
} as const);
