import type { PropType } from 'vue';

/**
 * @summary grid栅格布局
 * @description 使用float方式, 故所有项必须保持高度一致
 * @param span 占据多少格
 * @param offset 左边偏移多少格
 * @param align text-align对齐方式, 默认left
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  span: {
    type: [String, Number],
    default: 6,
  },
  offset: {
    type: [String, Number],
    default: 0,
  },
  align: {
    type: String as PropType<'left' | 'right' | 'center'>,
    default: 'left',
  },
  bodyClz: {
    type: String,
    default: '',
  },
  bg: {
    type: String as PropType<IColor>,
    default: 'white',
  },
};
