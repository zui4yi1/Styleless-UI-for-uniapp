import type { PropType } from 'vue';

export const props = {
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
  layout: {
    type: String as PropType<'float' | 'block'>, // block纵向
    default: 'float',
  },
};
