import type { PropType } from 'vue';

/**
 * @summary
 * @description
 * @param value array默认[], 使用时必须使用v-model:value的形式
 * @param list 选项列表, label, value形式, 暂无dataMap字段映射
 * @param direction 布局方向, x-水平, y-纵向
 * @param type 形状, circle | square, 默认square
 * @param disabled 是否禁用
 * @param labelClz 标签的样式类, 默认font-content与color-content
 * @param iconSize 打勾图标的尺寸
 * @param iconLib 图标库名, 默认sl-ui-common
 * @param iconName 打勾图标名, 默认icon_check
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  value: {
    type: Array,
    default: () => [],
  },
  list: {
    type: Array as PropType<{ label: string; value: any }[]>,
    default: () => [],
  },
  direction: {
    type: String as PropType<'x' | 'y'>,
    default: 'x',
  },
  type: {
    type: String as PropType<'circle' | 'square'>,
    default: 'square',
  },
  disabled: {
    type: Boolean,
    default: false,
  },

  labelClz: {
    type: String,
    default: 'font-content color-content',
  },
  iconSize: {
    type: Number,
    default: 28,
  },
  iconName: {
    type: String,
    default: 'icon_check',
  },
  iconLib: {
    type: String,
    default: 'sl-ui-common',
  },
};
