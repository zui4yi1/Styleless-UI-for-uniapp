import type { PropType } from 'vue';

/**
 * @summary
 * @description
 * @param value 双向绑定, 默认''
 * @param isAutoSearch 是否自动查询, 由防抖控制, 0.2秒
 * @param paddingClz input与边框的间距, 默认plr-d
 * @param borderClz 边框样式, 默认none
 * @param leftIcon 左图标对象, 完整的sl-icon参数
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  isAutoSearch: {
    type: Boolean,
    default: true,
  },
  paddingClz: {
    type: String,
    default: 'plr-d',
  },
  radius: {
    type: String as PropType<IRadius>,
    default: 'default',
  },
  borderClz: {
    type: String,
    default: 'none',
  },
  bg: {
    type: String as PropType<IColor>,
    default: 'white',
  },
  leftIcon: {
    type: Object,
    default: () => ({
      iconLib: 'sl-ui-common',
      name: 'icon_search',
      size: 32,
      color: 'placeholder',
      className: 'mr-xs',
    }),
  },
};
