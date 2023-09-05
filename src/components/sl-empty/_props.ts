import type { PropType } from 'vue';

export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  type: {
    type: String as PropType<'x' | 'y'>,
    default: 'x',
  },
  top: {
    type: Number,
    default: 300,
  },
  bg: {
    type: String as PropType<IColor>,
    default: 'white',
  },
  color: {
    type: String as PropType<IColor>,
    default: 'disabled',
  },
  size: {
    type: Number,
    default: 60,
  },
  content: {
    type: String,
    default: '暂无数据',
  },
};
