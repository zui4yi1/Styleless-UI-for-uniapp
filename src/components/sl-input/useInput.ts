import { ref } from 'vue';

export const useInput = (props: any, emits: any) => {
  const showPassword = ref(false);
  const focus = ref(false);
  let isClear = false;

  const handleFocus = () => {
    focus.value = true;
    emits('focus');
  };
  const handleBlur = (event: any) => {
    setTimeout(() => {
      focus.value = false;
      emits('blur', isClear ? '' : event.detail.value);
    }, 50);
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
    isClear = true;
    setTimeout(() => {
      isClear = false;
    }, 500);
  };
  return { showPassword, focus, handleFocus, handleBlur, handleInput, handleClear };
};
