import type { PropType } from 'vue';

const pxHeight = uni.upx2px(68);

/**
 * @summary picker联动组件, 底部弹窗模式
 * @description 可以任意多列, 只要放得下
 * @param open 是否打开弹窗, 须使用v-model:open双向绑定方式
 * @param title 弹窗标题
 * @param hasAll 是否给每列添加"全部"的空值选项
 * @param value 默认[], 必须使用v-model:value的方式使用
 * @param columns 列数, 必须指定多少列, 默认3
 * @param dataMap 数据映射, 即{label,value,children}的映射
 * @param list {label,value,children}格式的列表
 * @param pickViewHeight 每项的高度, 默认uni.upx2px(68)+px, 必须使用uni.upx2px转成px格式, 直接使用rpx会有小数导致不居中
 * @param indicatorClz 选中项的类, 默认text-center border-line-light border-top border-bottom(即文本居中+上下边框)
 * @param indicatorStyle 选中项的样式, 默认height: uni.upx2px(68)+px
 */
export interface IDataMap {
  label: string;
  value: string;
  children?: string[];
}
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  open: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  hasAll: {
    type: Boolean,
    default: false,
  },
  value: {
    type: [Array, String] as PropType<string[]>,
    default: () => [],
  },
  columns: {
    type: Number,
    default: 3,
  },
  dataMap: {
    type: Object as PropType<IDataMap>,
    default: () => ({
      label: 'label',
      value: 'value',
      children: 'children',
    }),
  },
  list: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  pickViewHeight: {
    type: String,
    default: `${pxHeight}px`,
  },
  indicatorClz: {
    type: String,
    default: 'flex-center border-line-light border-top border-bottom',
  },
  indicatorStyle: {
    type: String,
    default: `height: ${pxHeight}px`,
  },
};
