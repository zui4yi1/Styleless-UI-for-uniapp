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
  maxWidth: {
    type: String,
    default: '160rpx',
  },
  isMask: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<'select' | 'sort' | 'text' | 'cascade' | 'date' | 'custom'>,
    default: 'select',
  },
  list: {
    type: Array as PropType<ISelect[]>,
    default: () => [],
  },
  value: {
    type: [Array, String, Number],
    default: '',
  },
  mutilple: {
    type: Boolean,
    default: false,
  },
  hasAll: {
    type: Boolean,
    default: false,
  },
};
