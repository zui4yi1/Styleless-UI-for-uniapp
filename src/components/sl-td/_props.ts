import type { PropType } from 'vue';

export const props = {
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
