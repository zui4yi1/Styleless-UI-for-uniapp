import type { PropType } from 'vue';

/**
 * @summary 底部弹窗组件
 * @description 本身只有一个标题, 内容自定义
 * @param open 是否打开弹窗, 须使用v-model:open双向绑定方式
 * @param title 弹窗标题
 * @param closeOnTab 是否点击遮罩时关闭弹窗
 * @param mode 关闭模式,icon(只有一个X图标)或text(有取消和确定), 默认text
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
  title: {
    type: String,
    default: '',
  },
  closeOnTab: {
    type: Boolean,
    default: false,
  },
  mode: {
    type: String as PropType<'icon' | 'text'>,
    default: 'text',
  },
};
