import type { PropType } from 'vue';

export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  direction: {
    type: String as PropType<'x' | 'y'>,
    default: 'x',
  },
  value: {
    type: [String, Number, Boolean],
    default: '',
  },
  list: {
    type: Array as PropType<{ label: string; value: any }[]>,
    default: () => [],
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
    default: 'font-content color-content',
  },
  iconName: {
    type: String,
    default: 'icon_check',
  },
  iconLib: {
    type: String,
    default: 'sl-ui-common',
  },
};
