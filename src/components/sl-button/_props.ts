import type { PropType } from 'vue';

export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  type: {
    type: String as PropType<'theme' | 'plain' | 'text'>,
    default: 'theme',
  },
  radius: {
    type: String as PropType<IRadius>,
    default: 'default',
  },
  width: {
    type: String,
    default: 'auto',
  },
  paddingClz: {
    type: String,
    default: 'plr-s',
  },
  openType: {
    type: String as PropType<'none' | 'getPhoneNumber' | 'openSetting' | 'getUserInfo'>,
    default: 'none',
  },
  dataSet: {
    type: [Object, Array, String, Number, Boolean],
    default: null,
  },
  size: {
    type: String as PropType<IHeight>,
    default: 'button-default',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  hoverClass: {
    type: String,
    default: '',
  },
  /**
   * @description additional global classNames to body container if the default clazz is not enough
   */
  bodyClazz: {
    type: String,
    default: '',
  },
  bg: {
    type: String as PropType<IColor>,
    default: '',
  },
  color: {
    type: String as PropType<IColor>,
    default: 'white',
  },
  borderColor: {
    type: String as PropType<IColor>,
    default: 'none',
  },
  index: {
    type: Number,
    default: 0,
  },
  icon: {
    type: Object,
    default: () => ({
      name: '',
      className: 'mr-xs',
      iconLib: 'sl-ui-common',
      bg: 'primary' as IColor,
      size: 32,
      color: 'white' as IColor,
    }),
  },
};
