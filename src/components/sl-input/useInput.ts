import { ref } from 'vue';

export const useInput = (props: any, emits: any) => {
  const showPassword = ref(false);
  const focus = ref(false);

  const handleFocus = () => {
    focus.value = true;
    emits('focus');
  };
  const handleBlur = () => {
    setTimeout(() => {
      focus.value = false;
      // 注意: blur不传value, 否则容易与其它事件冲突如清空、键盘等, 导致value不准确
      emits('blur');
    }, 100);
  };
  const handleInput = (event: any) => {
    const val = event.detail.value || '';
    const curVal: string = props.trim ? val.trim() : val;
    emits('update:value', curVal);
    emits('input', curVal);
    emits('change', curVal);
  };
  const handleClear = () => {
    emits('update:value', '');
    emits('input', '');
  };
  const handleClickLeft = () => {
    emits('onLeft');
  };
  return {
    showPassword,
    focus,
    handleFocus,
    handleBlur,
    handleInput,
    handleClear,
    handleClickLeft,
  };
};
