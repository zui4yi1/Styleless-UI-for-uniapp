import type { PropType } from 'vue';

export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  bg: {
    type: String as PropType<IColor>,
    default: 'white',
  },
  width: {
    type: String,
    default: 'auto',
  },
  tdClz: {
    type: String,
    default: '',
  },
  align: {
    type: String,
    default: 'center',
  },
};
