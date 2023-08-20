import { ref } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useImage = (props: any, emits: any) => {
  const isError = ref(false);
  const isLoading = ref(true);

  const onErrorHandler = () => {
    isError.value = true;
    isLoading.value = false;
  };

  const onLoadHandler = () => {
    isError.value = false;
    isLoading.value = false;
  };

  const handleClick = () => {
    if (props.previewImage) {
      uni.previewImage({
        urls: [props.src],
      });
    }
    emits('click', props.index);
  };

  return {
    isError,
    isLoading,
    onErrorHandler,
    onLoadHandler,
    handleClick,
  };
};
