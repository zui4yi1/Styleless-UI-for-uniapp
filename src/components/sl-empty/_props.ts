import type { PropType } from 'vue';

/**
 * @summary 无数据的缺省组件
 * @description 可用于横向的组件无数据，也可用于纵向的页面级的无数据。若默认图标是多色的直接用slot
 * @param type 方向, x或y, 默认横向x
 * @param top type为y时距顶部的距离, 默认300(单位rpx)
 * @param iconName 图标icon, 默认icon_nodata
 * @param content 提示文字, 默认"暂无数据"
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  type: {
    type: String as PropType<'x' | 'y'>,
    default: 'x',
  },
  top: {
    type: Number,
    default: 300,
  },
  iconName: {
    type: String,
    default: 'icon_nodata',
  },
  bg: {
    type: String as PropType<IColor>,
    default: 'white',
  },
  color: {
    type: String as PropType<IColor>,
    default: 'disabled',
  },
  size: {
    type: Number,
    default: 60,
  },
  content: {
    type: String,
    default: '暂无数据',
  },
};
