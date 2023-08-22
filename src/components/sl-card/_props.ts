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
  paddingClz: {
    type: String,
    default: 'plr-l ptb-d',
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
