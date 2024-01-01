import type { PropType } from 'vue';

export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  color: {
    type: String as PropType<IColor>,
    default: 'line-light',
  },
  borderWidth: {
    type: String,
    default: '1px',
  },
  length: {
    type: String,
    default: '100%',
  },
  direction: {
    type: String as PropType<'x' | 'y'>,
    default: 'x',
  },
  isHairLine: {
    type: Boolean,
    default: true,
  },
  lineStyle: {
    type: String as PropType<'solid' | 'dashed' | 'dotted'>,
    default: 'solid',
  },
};
