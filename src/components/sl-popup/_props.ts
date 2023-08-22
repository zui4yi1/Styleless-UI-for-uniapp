import type { PropType } from 'vue';

export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  open: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  closeOnTab: {
    type: Boolean,
    default: false,
  },
  mode: {
    type: String as PropType<'icon' | 'text'>,
    default: 'text',
  },
};
