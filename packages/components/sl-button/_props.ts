import { buildProps } from '@/utils/element-plus/props';
import type { PropType } from 'vue';

export const props = buildProps({
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
      className: '',
      iconLib: 'sl-ui-common',
      bg: 'primary' as IColor,
      size: 'content' as IFont,
      color: 'white' as IColor,
    }),
  },
} as const);
