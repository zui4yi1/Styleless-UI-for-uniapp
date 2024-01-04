import type { CSSProperties, PropType } from 'vue';

/**
 * @summary
 * @description
 * @param type input的默认, 默认text
 * @param value 双向绑定, 默认''
 * @param paddingClz input与边框的间距, 默认plr-d
 * @param borderClz 边框样式, 默认只有底边框, 即border-bottom border-line-default
 * @param heightSize type不为textarea时的高度类,  默认cell-default
 * @param height type为textarea时的高度
 * @param fontSize 文字尺寸, 默认content
 * @param align 对齐, 默认left
 * @param prefix 前缀
 * @param prefixClz 前缀类名, 默认color-placeholder
 * @param suffix 后缀
 * @param suffixClz 后缀类名, 默认color-content
 * @param maxlength 最大输入
 * @param placeholder 默认"请输入"
 * @param placeholderStyle 默认font-size: 28rpx
 * @param disabled 默认false
 * @param fixed 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true
 * @param showClear 是否自动显示清空按钮
 * @param confirmType 默认"完成"
 * @param cursorSpacing 光标与输入框的距离
 * @param SelectionStart 选中开始距离
 * @param SelectionEnd 选中结束距离
 * @param styleObj 样式, 默认{}
 * @param leftIcon 左图标对象, 完整的sl-icon参数
 * @param clearIcon 清空图标对象, 完整的sl-icon参数
 * @param eyeIcon 眼睛图标对象, 完整的sl-icon参数
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: [String, Number],
    default: '',
  },
  paddingClz: {
    type: String,
    default: 'plr-d',
  },
  borderClz: {
    type: String,
    default: 'border-bottom border-line-default',
  },
  radius: {
    type: String as PropType<IRadius>,
    default: 'none',
  },
  heightSize: {
    type: String as PropType<IHeight>,
    default: 'cell-default',
  },
  height: {
    type: String,
    default: '4em',
  },
  fontSize: {
    type: String as PropType<IFont>,
    default: 'content',
  },
  color: {
    type: String as PropType<IColor>,
    default: 'content',
  },

  bg: {
    type: String as PropType<IColor>,
    default: 'white',
  },
  align: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left',
  },

  prefix: {
    type: String,
    default: '',
  },
  prefixClz: {
    type: String,
    default: 'color-placeholder',
  },

  suffix: {
    type: String,
    default: '',
  },
  suffixClz: {
    type: String,
    default: 'color-content',
  },
  maxlength: {
    type: [Number, String],
    default: 200,
  },
  placeholder: {
    type: String,
    default: '请输入',
  },
  placeholderStyle: {
    type: String,
    default: 'font-size: 28rpx',
  },

  disabled: {
    type: Boolean,
    default: false,
  },
  fixed: {
    type: Boolean,
    default: false,
  },
  showClear: {
    type: Boolean,
    default: true,
  },
  confirmType: {
    type: String,
    default: '完成',
  },
  cursorSpacing: {
    type: Number,
    default: 6,
  },
  SelectionStart: {
    type: Number,
    default: -1,
  },
  SelectionEnd: {
    type: Number,
    default: -1,
  },
  styleObj: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
  leftIcon: {
    type: Object,
    default: () => ({
      iconLib: 'sl-ui-common',
      name: '',
      size: 32,
      color: 'placeholder',
      className: 'mr-xs',
    }),
  },
  clearIcon: {
    type: Object,
    default: () => ({
      iconLib: 'sl-ui-common',
      name: 'icon_close_fill',
      size: 32,
      color: 'placeholder' as IColor,
      className: 'radius-round',
    }),
  },
  eyeIcon: {
    type: Object,
    default: () => ({
      iconLib: 'sl-ui-common',
      showEye: 'icon_eye_fill',
      closeEye: 'icon_eye',
      size: 40,
      color: 'placeholder' as IColor,
      className: 'bg-white border-round',
    }),
  },
};
