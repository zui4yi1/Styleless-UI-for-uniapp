import type { CSSProperties, PropType } from 'vue';

export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
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
    default: 'title',
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
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
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
  trim: {
    type: Boolean,
    default: true,
  },
  confirmType: {
    type: String,
    default: '完成',
  },
  cursorSpacing: {
    type: Number,
    default: 0,
  },
  SelectionStart: {
    type: String,
    default: '完成',
  },
  SelectionEnd: {
    type: String,
    default: '完成',
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
      size: 24,
      color: 'placeholder',
    }),
  },
  clearIcon: {
    type: Object,
    default: () => ({
      iconLib: 'sl-ui-common',
      name: 'icon_close',
      size: 32,
      color: 'white',
      className: 'bg-placeholder radius-round',
    }),
  },
};
