import type { PropType } from 'vue';

/**
 * @summary
 * @description
 * @param hasShadow 是否要有阴影, 默认true
 */
export const props = {
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
};
