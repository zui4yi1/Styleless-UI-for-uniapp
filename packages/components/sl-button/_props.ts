import type { PropType } from 'vue';

export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  radius: {
    type: String as PropType<IRadius>,
    default: 'default',
  },
  width: {
    type: String,
    default: 'auto',
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
    default: 'border-none',
  },
  bg: {
    type: String as PropType<IColor>,
    default: '',
  },
  color: {
    type: String as PropType<IColor>,
    default: 'white',
  },
  index: {
    type: Number,
    default: 0,
  },
  /**
   * @description 所有主题的配置, 无默认值，若有则优先级最高, 可用于自定义按钮的风格
   */
  theme: {
    type: Object,
    default: () => ({
      bg: '' as IColor,
      fontSize: '' as IFont,
      color: '' as IColor,
      borderClz: '',
    }),
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
