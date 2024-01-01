import type { PropType } from 'vue';

/**
 * @summary 填充行组件
 * @description 常用于填充间距、浮动元素填充避免被遮挡。默认无高度
 * @param hasShadow 是否要有阴影, 默认true
 * @param height 两种定义高度方式, height和size, height优先size, number或string型, 为string时必须带单位
 * @param size 两种定义高度方式, height和size, height优先size. IHeight类型, 默认''即不配置
 * @param isBottom 是否在底部,用于填充底部的安全区域。如果位于底部必须为true
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  height: {
    type: [Number, String],
    default: 0,
  },
  size: {
    type: String as PropType<IHeight>,
    default: '',
  },
  bg: {
    type: String as PropType<IColor>,
    default: 'transparent',
  },
  isBottom: {
    type: Boolean,
    default: false,
  },
};
