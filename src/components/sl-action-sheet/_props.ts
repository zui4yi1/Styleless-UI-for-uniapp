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

  list: {
    type: Array as PropType<{ text: string; color: IColor; disabled: boolean }[]>,
    default: () => [],
  },
};
