import { onMounted, ref } from 'vue';

/** states and hooks */
export const useNavBar = (props: any) => {
  const { statusBarHeight = 0 } = uni.getSystemInfoSync();
  const showHome = ref(false);
  const showGoBack = ref(false);

  const handleClickBack = () => {
    uni.navigateBack();
  };
  const handleClickHome = () => {
    console.log('🚀 ~ file: useNavBar.ts:15 ~ handleClickHome ~ props.homePath:', props.homePath);
    uni.reLaunch({
      url: props.homePath,
    });
  };

  onMounted(() => {
    const pages = getCurrentPages();
    const curPage = pages[pages.length - 1].route || '';

    if (pages.length >= 2) {
      showGoBack.value = true;
    } else {
      if (!props.filterPages.some((p: string) => p.includes(curPage))) {
        showHome.value = true;
      }
    }
  });
  return {
    showHome,
    showGoBack,
    statusBarHeight,
    handleClickBack,
    handleClickHome,
  };
};
