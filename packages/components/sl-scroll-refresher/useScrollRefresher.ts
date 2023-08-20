import { getDom } from '@/utils/dom';
import { inject, nextTick, onMounted, reactive, ref, watch } from 'vue';

export const useScrollRefresher = (props: any, instance: any) => {
  const isSucc = ref(false);
  const showPullTip = ref(false);
  const showRefreshTip = ref(false);
  const showAppendTip = ref(false);
  const showErrorTip = ref(false);

  const refresherTriggered = ref(false);
  const isScroll2Bottom = ref(false);
  const isShowNoMoreTip = ref(false);

  const showList = ref(true);
  const pager = reactive({
    pageSize: 10,
    pageNum: 0,
    total: Infinity,
  });

  const heightChangeCount = inject('heightChangeCount', 0);

  const bodyHeight = ref('100%');

  const getBodyHeight = async () => {
    const sysInfo = uni.getSystemInfoSync();
    const domInfo = await getDom(instance, '.top_area');
    bodyHeight.value = `${sysInfo.windowHeight - (domInfo.bottom || 0)}px`;
  };

  watch(
    () => heightChangeCount,
    () => {
      nextTick(() => {
        getBodyHeight();
      });
    },
  );

  const initPager = () => {
    Object.assign(pager, { pageSize: props.pageSize, pageNum: 0, total: Infinity });
  };

  let isDebounce = false;
  const fetchData = async (type: 'new' | 'append', calback?: any) => {
    // 防抖
    if (isDebounce) return;
    isDebounce = true;
    setTimeout(() => {
      isDebounce = false;
    }, 200);

    if (type === 'new') {
      showList.value = false;
    }
    isScroll2Bottom.value = true;

    try {
      const res = await props.fetchDataFunc(
        Object.assign({}, pager, { pageNum: pager.pageNum + 1 }),
        type,
      );
      showList.value = true;
      isScroll2Bottom.value = false;
      showAppendTip.value = false;

      if (props.isLoadMore) {
        Object.assign(pager, {
          total: res[props.totalMap],
          pageNum: pager.pageNum + 1,
        });
      }
      if (typeof calback === 'function') {
        calback(res);
      }
      return res;
    } catch (e: any) {
      if (type === 'new') refresherTriggered.value = false;
      isSucc.value = false;
      showErrorTip.value = e?.desc || '';
      return [];
    }
  };

  const refreshData = async () => {
    showPullTip.value = false;
    showRefreshTip.value = false;
    isShowNoMoreTip.value = false;

    refresherTriggered.value = true;
    initPager();
    await fetchData('new', () => {
      refresherTriggered.value = false;
      if (props.showSuccTip) {
        isSucc.value = true;
        setTimeout(() => {
          isSucc.value = false;
        }, 1000);
      }
    });
  };

  const fetchMoreData = async () => {
    if (isScroll2Bottom.value || refresherTriggered.value) return;
    isScroll2Bottom.value = true;
    setTimeout(() => {
      isScroll2Bottom.value = false;
    }, 1000);
    if (!props.isLoadMore || pager.pageNum * pager.pageSize >= pager.total) {
      isShowNoMoreTip.value = props.showNoMoreTip ? true : false;
      return;
    }
    showAppendTip.value = true;
    fetchData('append');
  };

  const handlePull = (e: any) => {
    if (refresherTriggered.value || isSucc.value) return;
    let dy = 0;
    // #ifdef H5
    dy = e.detail.deltaY;
    // #endif

    // #ifdef MP-WEIXIN || APP-PLUS
    dy = e.detail.dy;
    // #endif
    showPullTip.value = false;
    showRefreshTip.value = false;
    if (dy >= 0 && dy < props.threshold) {
      showPullTip.value = true;
      showRefreshTip.value = false;
    } else if (dy >= props.threshold) {
      showPullTip.value = false;
      showRefreshTip.value = true;
    } else {
      showRefreshTip.value = false;
      showPullTip.value = false;
    }
  };

  const hanleRefresherabort = () => {
    showRefreshTip.value = false;
    showPullTip.value = false;
  };

  const resetData = () => {
    initPager();
    fetchData('new');
  };

  onMounted(() => {
    setTimeout(() => {
      getBodyHeight();
    }, 50);
    initPager();
    props.autoLoadData && fetchData('new');
  });

  return {
    bodyHeight,
    showList,
    refresherTriggered,
    showPullTip,
    showRefreshTip,
    showAppendTip,
    showErrorTip,
    isShowNoMoreTip,
    initPager,
    fetchData,
    refreshData,
    fetchMoreData,
    handlePull,
    hanleRefresherabort,
    resetData,
  };
};
