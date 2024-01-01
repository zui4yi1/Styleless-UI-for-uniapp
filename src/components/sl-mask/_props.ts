import type { PropType } from 'vue';

/**
 * @summary 遮罩组件
 * @description 所有弹窗类组件的根组件
 * @param open 是否打开弹窗, 须使用v-model:open双向绑定方式
 * @param closeOnTab 是否点击遮罩时关闭弹窗
 * @param mode 模式, 即内容在什么地方，共'left' | 'bottom' | 'right' | 'top' | 'center'五个
 * @param width mode为center时的宽度, 需自带单位, 默认66%
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  open: {
    type: Boolean,
    default: false,
  },
  closeOnTab: {
    type: Boolean,
    default: true,
  },
  mode: {
    type: String as PropType<'left' | 'bottom' | 'right' | 'top' | 'center'>,
    default: 'bottom',
  },
  /**
   * @description 宽度,需自带单位, 仅mode为center时应用
   */
  width: {
    type: String,
    default: '66%',
  },
};
