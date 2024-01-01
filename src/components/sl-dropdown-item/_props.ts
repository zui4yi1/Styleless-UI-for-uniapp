import type { PropType } from 'vue';

/**
 * @summary
 * @description
 * @param value select, cascade或date可传, 使用时必须使用v-model:value的形式
 * @param title 弹窗标题
 * @param maxWidth 每项的最大宽度, 默认160rpx, 若是日期可能要手动设置200rpx左右
 * @param isMask 点击项时是否打开遮罩, 暂时无用, 后续增加自定义模式的时候可用
 * @param type 选项类型, 暂时支持五种'select' | 'cascade' | 'date'| 'sort' | 'text', 默认select
 * @param list 数据列, select或cascade可传
 * @param mutilple 是否可多选, select时传
 * @param hasAll cascade是否自动添加"全部"选项
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  value: {
    type: [Array, String, Number],
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  maxWidth: {
    type: String,
    default: '160rpx',
  },
  isMask: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<'select' | 'sort' | 'text' | 'cascade' | 'date' | 'custom'>,
    default: 'select',
  },
  list: {
    type: Array as PropType<ISelect[]>,
    default: () => [],
  },

  mutilple: {
    type: Boolean,
    default: false,
  },
  hasAll: {
    type: Boolean,
    default: false,
  },
};
