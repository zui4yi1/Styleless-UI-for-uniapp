import type { PropType } from 'vue';

/**
 * @summary space布局组件, 其实就是比flex-wrap布局多了间距
 * @description 横向时使用float方式, 故所有项必须保持高度一致
 * @param gutter 横向间距, 注意不能带单位, 默认16(rpx)
 * @param rowGutter 纵向间距, 同gutter默认0, (若为0实际与gutter相同)
 * @param layout 布局方式 float横向, block纵向
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  gutter: {
    type: [String, Number],
    default: 16,
  },
  rowGutter: {
    type: [String, Number],
    default: 0,
  },
  layout: {
    type: String as PropType<'float' | 'block'>, // block纵向
    default: 'float',
  },
};
