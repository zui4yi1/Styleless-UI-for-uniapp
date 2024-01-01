/**
 * @summary 模态弹框组件
 * @description
 * @param open 是否打开弹窗, 须使用v-model:open双向绑定方式
 * @param closeOnTab 是否点击遮罩时关闭弹窗
 * @param title 弹窗标题
 * @param hasTitle 是否有标题
 * @param cancelText 默认"取消"
 * @param confirmText 默认"确定"
 * @param hasClose 是否有关闭图标, 默认false
 * @param hasCancel 是否有取消按钮, 默认true
 * @param hasConfirm 有否有确认按钮, 默认true
 * @param hasFoot 是否有foot
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
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  hasTitle: {
    type: Boolean,
    default: true,
  },
  cancelText: {
    type: String,
    default: '取消',
  },
  confirmText: {
    type: String,
    default: '确定',
  },
  hasClose: {
    type: Boolean,
    default: false,
  },
  hasCancel: {
    type: Boolean,
    default: true,
  },
  hasConfirm: {
    type: Boolean,
    default: true,
  },
  hasFoot: {
    type: Boolean,
    default: true,
  },
};
