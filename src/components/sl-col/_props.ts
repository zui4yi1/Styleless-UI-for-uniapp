import type { PropType } from 'vue';

export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  span: {
    type: [String, Array],
    default: 6,
  },
  offset: {
    type: [String, Array],
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
