import type { PropType } from 'vue';

export type IField = 'year' | 'month' | 'date';
export type IMode = 'date' | 'time' | 'datetime';

const pxHeight = uni.upx2px(68);

export const props = {
  /**
   * @description inject global classNames to the component root
   */
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
  /** 格式YYYY-MM-DD, 无值则默认前后各十年 */
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
    default: 'flex-center border-line-light border-top border-bottom',
  },
  indicatorStyle: {
    type: String,
    default: `height: ${pxHeight}px`,
  },
};
