import type { PropType } from 'vue';

export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  span: {
    type: [String, Number],
    default: 6,
  },
  offset: {
    type: [String, Number],
    default: 0,
  },
  align: {
    type: String as PropType<'left' | 'right' | 'center'>,
    default: 'left',
  },
  index: {
    type: Number,
    default: 0,
  },
  bodyClz: {
    type: String,
    default: '',
  },
  bg: {
    type: String as PropType<IColor>,
    default: 'white',
  },
};
