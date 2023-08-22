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
    type: String as PropType<'inline' | 'column'>,
    default: 'column',
  },
  top: {
    type: Number,
    default: 320,
  },
  url: {
    type: String,
    default: 'XXXXXXXXXXXXX',
  },
  bg: {
    type: String as PropType<IColor>,
    default: 'white',
  },
  sizes: {
    type: Object,
    default: () => ({
      width: '140rpx',
      height: '100rpx',
    }),
  },
  content: {
    type: String,
    default: '',
  },
};
