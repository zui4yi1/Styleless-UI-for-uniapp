import type { PropType } from 'vue';

/**
 * @summary grid栅格布局
 * @description 使用float方式, 故所有项必须保持高度一致
 * @param gutter 横向间距, 注意不能带单位, 默认16(rpx)
 * @param rowGutter 纵向间距, 同gutter默认0, (若为0实际与gutter相同)
 * @param height 每项的高度,默认88, 注意不能带单位(内置单位rpx)
 * @param radius 每个项的圆角, 默认none即无
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
  height: {
    type: [String, Number],
    default: 88,
  },
  radius: {
    type: String as PropType<IRadius>,
    default: 'none',
  },
};
