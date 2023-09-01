<template>
  <view :class="[clz.root(), className]" class="flex relative">
    <slot />
  </view>
</template>
<script lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { getDom } from '@/utils/dom';
  import { defineComponent, getCurrentInstance, onMounted, provide, ref } from 'vue';
  import { props } from './_props';

  const ComponentName = 'sl-dropdown';
  const clz = useClassName(ComponentName);

  export default defineComponent({
    name: ComponentName,
    options: {
      virtualHost: true,
    },
    props,
    emits: ['change'],
    setup(props, ctx) {
      const activeInx = ref(-1);
      const dropdownItems = ref([] as string[]);
      const topPos = ref(-1);

      const instance = getCurrentInstance();

      onMounted(async () => {
        const rect = await getDom(instance, '.' + ComponentName);
        topPos.value = rect.bottom || 0;
      });

      provide('dropdownParent', {
        scroll: props.scroll,
        dropdownItems,
        activeInx,
        topPos,
        addItem: (title: string) => {
          dropdownItems.value.push(title);
        },
        updateActiveInx: (inx: number) => {
          activeInx.value = inx;
        },
        onChange: (inx: number, value: any) => {
          ctx.emit('change', { inx, value });
        },
      });
      return { clz, activeInx };
    },
  });
</script>
