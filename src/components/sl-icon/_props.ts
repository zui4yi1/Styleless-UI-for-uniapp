import type { CSSProperties, PropType } from 'vue';

/**
 * @summary
 * @description
 * @param iconLib iconfont库, 默认sl-ui-common, 多图标库时可配置为其它
 * @param name 图标名称
 * @param size 图标尺寸, 不能传单位, 实际作用于font-size
 * @param hoverClass 点击时的颜色
 * @param styleProps style对象, 貌似没啥用
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  iconLib: {
    type: String,
    default: 'sl-ui-common',
  },
  name: {
    type: String,
    default: 'icon_add',
  },
  color: {
    type: String as PropType<IColor>,
    default: 'placeholder',
  },
  hoverClass: {
    type: String,
    default: '',
  },
  size: {
    type: [Number, String],
    default: 28,
  },
  styleProps: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
};
