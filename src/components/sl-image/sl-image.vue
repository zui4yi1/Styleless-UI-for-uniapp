<template>
  <view
    :class="[clz.root(), className, `bg-${bg}`, `radius-${radius}`]"
    class="relative"
    :style="{
      width: width,
      height: height,
    }"
    @tap="handleClick"
  >
    <image
      :class="[clz.body(), `radius-${radius}`]"
      :src="src"
      :mode="mode"
      :lazy-load="lazyLoad"
      :show-menu-by-longpress="showMenuByLongpress"
      @error="onErrorHandler"
      @load="onLoadHandler"
      :style="{
        width: width,
        height: height,
      }"
    />
    <view
      v-if="showLoading && isLoading"
      :class="[`radius-${radius}`]"
      class="absolute abs-full flex-center bg-white"
    >
      <slot v-if="$slots.loading" name="loading" />
      <sl-icon name="icon_loading" :size="64" className="spin" />
    </view>
    <view
      v-if="showError && isError"
      :class="[`radius-${radius}`]"
      class="absolute abs-full flex-center bg-white"
    >
      <slot v-if="$slots.error" name="error" />
      <sl-icon name="icon_image_fail" color="disabled" :size="64" />
    </view>
  </view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { props } from './_props';
  import { useImage } from './useImage';

  const ComponentName = 'sl-image';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);
  const _emits = defineEmits(['click']);
  const { isLoading, isError, onErrorHandler, onLoadHandler, handleClick } = useImage(
    _props,
    _emits,
  );
</script>
