import type { PropType } from 'vue';

export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  gutter: {
    type: [String, Number],
    default: 16,
  },
  rowGutter: {
    type: [String, Number],
    default: 0,
  },
  height: {
    type: [String, Number],
    default: 88,
  },
  radius: {
    type: String as PropType<IRadius>,
    default: 'none',
  },
};
