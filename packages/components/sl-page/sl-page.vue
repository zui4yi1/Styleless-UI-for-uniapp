<template>
  <view
    :class="[clz.root(), className, `bg-${bg}`]"
    class="page-root family-regular font-content color-content lh-6"
    :style="{ paddingTop: `${statusBarHeight}px` }"
  >
    <sl-nav-bar
      v-if="showNavBar"
      :title="title"
      :autoHomeOrLeftIcon="autoHomeOrLeftIcon"
      :color="navBarColor"
      :bg="navBarBg"
      :iconColor="iconColor"
      :iconSize="iconSize"
      :iconLib="iconLib"
      :filterPages="filterPages"
      :homePath="homePath"
      @onClickTitle="$emit('onClickTitle')"
    >
      <template #left><slot name="navBarLeft" /></template>
      <template #right><slot name="navBarRight" /></template>
    </sl-nav-bar>
    <!--top-->

    <view :class="[clz.body()]">
      <slot v-if="pageLoadingStatus === 0" name="loading" />
      <slot v-else-if="pageLoadingStatus === 1" name="default" />
      <slot v-if="pageLoadingStatus === 2" name="error" />
      <sl-fill-line v-if="safeBottomPadding" isBottom />
    </view>
  </view>
</template>
<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-page';
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
  import { props } from './_props';

  defineProps(props);
  defineEmits(['onClickTitle']);

  const { statusBarHeight = 0 } = uni.getSystemInfoSync();
</script>
