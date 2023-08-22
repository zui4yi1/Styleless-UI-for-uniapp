import type { PropType } from 'vue';

export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  current: {
    type: Number,
    default: 0,
  },
  list: {
    type: Array as PropType<{ name: string; count: number }[]>,
    default: () => [],
  },
  isScroll: {
    type: Boolean,
    default: true,
  },
  showDivider: {
    type: Boolean,
    default: true,
  },
};
