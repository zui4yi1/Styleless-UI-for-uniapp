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
    type: [String, Array],
    default: 16,
  },
  layout: {
    type: String as PropType<'float' | 'inline-block'>,
    default: 'float',
  },
  rowGutter: {
    type: [String, Array],
    default: 0,
  },
};
