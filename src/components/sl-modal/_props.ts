import { buildProps } from '@/utils/element-plus/props';

export const props = buildProps({
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
  closeOnTab: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  hasClose: {
    type: Boolean,
    default: false,
  },
  hasCancel: {
    type: Boolean,
    default: true,
  },
  hasFoot: {
    type: Boolean,
    default: true,
  },
} as const);
