import type { PropType } from 'vue';

/**
 * @summary 标签页组件
 * @description 只有标签行, 无内容块, 具体展示由current控制即可
 * @param current 默认0, 使用时必须使用v-model:current的形式
 * @param list 标签列表, {name, count}形式, name是标签名, count是数量可不传
 * @param scroll 是否有横向滚动, 默认false. 为false时居中布局
 * @param showDivider 是否显示分割线
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  current: {
    type: Number,
    default: 0,
  },
  list: {
    type: Array as PropType<{ name: string; count: number }[]>,
    default: () => [],
  },
  scroll: {
    type: Boolean,
    default: false,
  },
  showDivider: {
    type: Boolean,
    default: false,
  },
  bodyClz: {
    type: String,
    default: 'ptb-s',
  },
};
