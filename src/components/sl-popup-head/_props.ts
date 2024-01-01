import type { PropType } from 'vue';

export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  mode: {
    type: String as PropType<'icon' | 'text' | 'none'>,
    default: 'text',
  },
};
