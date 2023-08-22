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

  autoLoadData: {
    type: Boolean,
    default: false,
  },

  isLoadMore: {
    type: Boolean,
    default: false,
  },
  showSuccTip: {
    type: Boolean,
    default: true,
  },
  showNoMoreTip: {
    type: Boolean,
    default: true,
  },
  threshold: {
    type: Number,
    default: 80,
  },

  fetchDataFunc: {
    type: Function,
    default: () => {},
  },
};
