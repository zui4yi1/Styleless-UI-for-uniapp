import type { PropType } from 'vue';

/**
 * @summary
 * @description
 * @param type 按钮模式, {theme-带主题背景色, plain-文字和边框, text-只有文字}, 默认theme
 * @param disabled 是否禁用
 * @param width 宽度默认auto, 需带单位
 * @param paddingClz type为theme或plain时可用, 用于配置文字与边框的间距, 默认plr-s
 * @param openType 小程序用的开放类型
 * @param dataSet 存数据
 * @param size 高度类, IHeight 默认button-default
 * @param hoverClass 点击颜色, 默认'', 内置统一使用opacity-disabled
 * @param icon 图标对象, 完整的sl-icon参数,  {name,className, iconLib, bg, size, color}, 默认{
      name: '',
      className: 'mr-xs',
      iconLib: 'sl-ui-common',
      bg: 'primary' as IColor,
      size: 32,
      color: 'white' as IColor,
    }
 */
export const props = {
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
