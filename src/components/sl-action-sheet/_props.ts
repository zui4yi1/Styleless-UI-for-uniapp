import type { PropType } from 'vue';

/**
 * @summary
 * @description
 * @param open 是否打开弹窗, 须使用v-model:open双向绑定方式
 * @param title 弹窗标题
 * @param list sheet列表,
 */
export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  open: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },

  list: {
    type: Array as PropType<{ label: string; color: IColor; disabled: boolean }[]>,
    default: () => [],
  },
};
