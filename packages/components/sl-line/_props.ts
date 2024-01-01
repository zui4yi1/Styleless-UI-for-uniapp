import type { PropType } from 'vue';

/**
 * @summary
 * @description
 * @param borderWidth 边框厚度, 默认1px
 * @param direction 方向x或y, 默认x
 * @param length 长度或高度, 视direction方向
 * @param isHairLine 是否细线
 * @param lineStyle 线的风格, 'solid' | 'dashed' | 'dotted',默认solid
 */

export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  color: {
    type: String as PropType<IColor>,
    default: 'line-light',
  },
  borderWidth: {
    type: String,
    default: '1px',
  },
  length: {
    type: String,
    default: '100%',
  },
  direction: {
    type: String as PropType<'x' | 'y'>,
    default: 'x',
  },
  isHairLine: {
    type: Boolean,
    default: true,
  },
  lineStyle: {
    type: String as PropType<'solid' | 'dashed' | 'dotted'>,
    default: 'solid',
  },
};
