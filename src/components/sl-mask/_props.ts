import type { PropType } from 'vue';

export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  open: {
    type: Boolean,
    default: false,
  },
  closeOnTab: {
    type: Boolean,
    default: true,
  },
  mode: {
    type: String as PropType<'left' | 'bottom' | 'right' | 'top' | 'center'>,
    default: 'bottom',
  },
  /**
   * @description 宽度,需自带单位, 仅mode为center时应用
   */
  width: {
    type: String,
    default: '66%',
  },
};
