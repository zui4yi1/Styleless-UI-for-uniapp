export const props = {
  /**
   * @description inject global classNames to the component root
   */
  className: {
    type: [String, Array],
    default: '',
  },

  totalMap: {
    type: String,
    default: 'total',
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
