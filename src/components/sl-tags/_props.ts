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
  /** 默认不设置高度 */
  size: {
    type: String as PropType<IHeight>,
    default: 'button-none',
  },
  type: {
    type: String as PropType<'text' | 'bg'>,
    default: 'bg',
  },
  font: {
    type: String as PropType<IFont>,
    default: 'secondary',
  },
  showDelete: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String as PropType<IColor>,
    default: 'white',
  },
  bg: {
    type: String as PropType<IColor>,
    default: 'primary',
  },
  radius: {
    type: String as PropType<IRadius>,
    default: 'default',
  },
  bodyClz: {
    type: String,
    default: 'plr-s ptb-xs',
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
