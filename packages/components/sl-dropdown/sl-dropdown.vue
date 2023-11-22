<template>
  <view :class="[clz.root(), className]" class="flex relative">
    <slot />
  </view>
</template>
<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-dropdown';
  const clz = useClassName(ComponentName);
  export default {
    name: ComponentName,
    options: {
      virtualHost: true,
      inheritAttrs: false,
    },
  };
</script>

<script setup lang="ts">
  import { getDom } from '@/utils/dom';
  import { getCurrentInstance, onMounted, provide, ref } from 'vue';
  import { props } from './_props';

  const _props = defineProps(props);
  const _emits = defineEmits(['change']);

  const activeInx = ref(-1);
  const dropdownItems = ref([] as string[]);
  const topPos = ref(-1);

  const instance = getCurrentInstance();

  onMounted(async () => {
    const rect = await getDom(instance, '.' + ComponentName);
    topPos.value = rect.bottom || 0;
  });

  provide('dropdownParent', {
    scroll: _props.scroll,
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
      _emits('change', { inx, value });
    },
  });
</script>
