import { buildProps } from '@/utils/element-plus/props';

export const props = buildProps({
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  name: {
    type: String,
    default: 'icon_check',
  },
  iconLib: {
    type: String,
    default: 'sl-ui-common',
  },
  iconClz: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  size: {
    type: Number,
    default: 28,
  },
  labelClz: {
    type: String,
    default: 'font-content color-content',
  },
} as const);
