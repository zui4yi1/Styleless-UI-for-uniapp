import type { CSSProperties, PropType } from 'vue';

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
  maxlength: {
    type: Number,
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
    default: true,
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
