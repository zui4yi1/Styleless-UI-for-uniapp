import type { PropType } from 'vue';

export const props = {
  /**
   * @description inject global classNames to the component root
   */
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
