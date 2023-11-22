import { onBeforeUnmount, watchEffect, type Ref } from 'vue';

export const injectPropHook = (prop: string, valRef: Ref<any>, form: any) => {
  watchEffect(() => {
    form[prop] = valRef.value;
  });
  onBeforeUnmount(() => {
    delete form[prop];
  });
};
