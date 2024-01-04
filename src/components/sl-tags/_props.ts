import type { PropType } from 'vue';

export type ITagItem = {
  label: string;
  bg?: IColor;
  color?: IColor;
};

/**
 * @summary tag标记组件
 * @description 只有单个时直接传label, 有多个时传list
 * @param label 标记名, 只有单个时使用
 * @param list 标记列表, 有多个时使用。属性{label, bg, color}
 * @param type 展示模式, text-只有文字, bg-带背景
 * @param showDelete 是否显示删除
 */
export const props = {
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
