import type { PropType } from 'vue';

export type ITagItem = {
  label: string;
  bg?: IColor;
  color?: IColor;
};
export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  type: {
    type: String as PropType<'text' | 'bg'>,
    default: 'bg',
  },
  color: {
    type: String as PropType<IColor>,
    default: 'primary',
  },
  font: {
    type: String as PropType<IFont>,
    default: 'secondary',
  },
  showDelete: {
    type: Boolean,
    default: false,
  },
  bg: {
    type: String as PropType<IColor>,
    default: 'primary',
  },
  label: {
    type: String,
    default: '',
  },
  list: {
    type: Array as PropType<ITagItem[]>,
    default: () => [],
  },
};
