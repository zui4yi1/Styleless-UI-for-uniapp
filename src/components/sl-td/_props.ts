import type { PropType } from 'vue';

/**
 * @summary
 * @description
 * @param width 默认'auto', 需要自带单位
 * @param align 对齐方式, 注意非text-align, 而是flex级别的
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  bg: {
    type: String as PropType<IColor>,
    default: 'white',
  },
  width: {
    type: String,
    default: 'auto',
  },
  tdClz: {
    type: String,
    default: '',
  },
  align: {
    type: String,
    default: 'center',
  },
};
