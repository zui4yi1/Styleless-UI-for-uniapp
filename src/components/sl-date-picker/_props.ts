import type { PropType } from 'vue';

export type IField = 'year' | 'month' | 'date';
export type IMode = 'date' | 'time' | 'datetime';

const pxHeight = uni.upx2px(68);

/**
 * @summary 日期组件
 * @description 使用dayjs开发
 * @param open 是否打开弹窗, 须使用v-model:open双向绑定方式
 * @param title 弹窗标题
 * @param value string格式的日期, 必须使用v-model:value的方式使用
 * @param mode 日期模式, 暂时只有纯date模式, 后续会考虑增加datetime或time, 或另开新组件
 * @param field 列模式, year只有年, month年月, date年月日, 默认date
 * @param start string格式的起始日期, 无则默认前80年的年初
 * @param end string格式的结束日期, 无则默认后10年的年末
 * @param format 日期格式, 默认YYYY-MM-DD
 * @param pickViewHeight 每项的高度, 默认uni.upx2px(68)+px, 必须使用uni.upx2px转成px格式, 直接使用rpx会有小数导致不居中
 * @param indicatorClz 选中项的类, 默认text-center border-line-light border-top border-bottom(即文本居中+上下边框)
 * @param indicatorStyle 选中项的样式, 默认height: uni.upx2px(68)+px
 */
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
  value: {
    type: String,
    default: '',
  },
  // 暂时只有date模式
  mode: {
    type: String as PropType<'date' | 'time' | 'datetime'>,
    default: 'date',
  },
  field: {
    type: String as PropType<IField>,
    default: 'date',
  },
  start: {
    type: String,
    default: '',
  },
  end: {
    type: String,
    default: '',
  },
  format: {
    type: String,
    default: 'YYYY-MM-DD',
  },
  pickViewHeight: {
    type: String,
    default: `${pxHeight}px`,
  },
  indicatorClz: {
    type: String,
    default: 'text-center border-line-light border-top border-bottom',
  },
  indicatorStyle: {
    type: String,
    default: `height: ${pxHeight}px`,
  },
};
