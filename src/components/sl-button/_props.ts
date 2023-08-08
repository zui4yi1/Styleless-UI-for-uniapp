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
  index: {
    type: Number,
    default: 0,
  },
  theme: {
    type: Object,
    default: () => ({
      bg: 'primary' as IColor,
      borderColor: 'none' as IColor,
      fontSize: 'content' as IFont,
      color: 'white' as IColor,
      hasBorder: false,
      borderThick: false,
    }),
  },
  icon: {
    type: Object,
    default: () => ({
      name: '',
      className: '',
      iconLib: 'common',
      bg: 'primary' as IColor,
      size: 'content' as IFont,
      color: 'white' as IColor,
    }),
  },
} as const);
