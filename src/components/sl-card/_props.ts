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
  radius: {
    type: String as PropType<IRadius>,
    default: 'default',
  },
  bodyClz: {
    type: String,
    default: 'plr-l ptb-d',
  },
  borderClz: {
    type: String,
    default: 'border border-line-default',
  },
  hasShadow: {
    type: Boolean,
    default: true,
  },
  index: {
    type: Number,
    default: 0,
  },
};
