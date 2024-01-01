import type { PropType } from 'vue';

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
