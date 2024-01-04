/**
 * @summary 分页组件, 下拉刷新, 触底加载
 * @description 已封装分页, 简单模式下, 仅需要实现fetchDataFunc这个查询数据的函数即可。
 * @param fetchDataFunc 查询数据的函数, 必须返回带total的对象, 用于控制分页。通常只要传这个参数即可。
 * @param refresherEnabled 是否可下拉刷新
 * @param pageSize 分页尺寸
 * @param autoLoadData 页面挂载后是否自动查询数据
 * @param isLoadMore 是否触底后自动加载, 默认true
 * @param showSuccTip 是否下拉刷新成功后显示刷新成功
 * @param showNoMoreTip 是否显示没有更多数据
 * @param totalMap total字段映射, 默认total
 * @param threshold 下拉时的距离达到多少触发刷新功能
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },

  refresherEnabled: {
    type: Boolean,
    default: true,
  },

  pageSize: {
    type: Number,
    default: 10,
  },

  autoLoadData: {
    type: Boolean,
    default: false,
  },

  isLoadMore: {
    type: Boolean,
    default: true,
  },
  showSuccTip: {
    type: Boolean,
    default: true,
  },
  showNoMoreTip: {
    type: Boolean,
    default: true,
  },
  totalMap: {
    type: String,
    default: 'total',
  },
  bodyClz: {
    type: String,
    default: 'plr-l',
  },
  threshold: {
    type: Number,
    default: 50,
  },

  fetchDataFunc: {
    type: Function,
    default: () => {},
  },
};
