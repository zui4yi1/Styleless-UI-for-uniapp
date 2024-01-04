/**
 * @summary 开关组件
 * @description 因为圆角问题, 故高和宽都必须传实际值, 而不是类名
 * @param value 默认false, 使用时必须使用v-model:value的形式
 * @param height 高度, 注意不能带单位, 默认56(rpx)
 * @param width 宽度, 注意不能带单位, 默认40(rpx)
 * @param disabled 是否禁用
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  /** 高度的尺寸 */
  height: {
    type: [Number, String],
    default: 56,
  },
  /** 中间矩形宽度，实际的switch宽度为 height+width */
  width: {
    type: [Number, String],
    default: 40,
  },

  value: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  bodyClz: {
    type: String,
    default: '',
  },
};
