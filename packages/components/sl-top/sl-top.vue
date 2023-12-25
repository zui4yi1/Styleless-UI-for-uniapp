<template>
  <view
    :class="[clz.root(), className, bodyClz]"
    class="fixed z-index-layout abs-top delay-show"
    :style="{
      top: isCustomNavBar ? `${top}px` : 0,
    }"
  >
    <slot />
  </view>
  <sl-fill-line :height="height" />
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-top';
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
  import { getCurrentInstance, onMounted, ref } from 'vue';
  import { getDom } from '../../utils/dom';
  import { props } from './_props';

  const _props = defineProps(props);

  const top = ref(0);
  const height = ref('0px');

  onMounted(async () => {
    const sysInfo = uni.getSystemInfoSync();
    const { statusBarHeight = 0 } = sysInfo;
    top.value = statusBarHeight + uni.upx2px(_props.customNavBarHeight as any);

    const instance = getCurrentInstance();
    const dom = await getDom(instance, '.' + ComponentName);
    height.value = `${dom.height || 0}px`;
  });
</script>
