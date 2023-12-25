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
  scroll: {
    type: Boolean,
    default: false,
  },
  showDivider: {
    type: Boolean,
    default: false,
  },
  bodyClz: {
    type: String,
    default: 'pb-s',
  },
};
