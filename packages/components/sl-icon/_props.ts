import type { CSSProperties, PropType } from 'vue';

export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },
  iconLib: {
    type: String,
    default: 'sl-ui-common',
  },
  name: {
    type: String,
    default: 'icon_add',
  },
  color: {
    type: String as PropType<IColor>,
    default: 'placeholder',
  },
  hoverClass: {
    type: String,
    default: '',
  },
  size: {
    type: [Number, String],
    default: 28,
  },
  index: {
    type: Number,
    default: 0,
  },
  styleProps: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
};
