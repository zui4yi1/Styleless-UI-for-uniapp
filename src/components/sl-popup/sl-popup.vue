<template>
  <sl-mask :closeOnTab="closeOnTab" mode="bottom" v-model:open="isOpen">
    <sl-tip-head :title="title" @close="isOpen = false" @confirm="$emit('confirm')" />

    <view :class="[clz.body()]" class="bg-white">
      <slot />
    </view>
  </sl-mask>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { computed } from 'vue';
  import { props } from './_props';

  const ComponentName = 'sl-popup';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);
  const _emits = defineEmits(['update:open', 'confirm']);

  const isOpen = computed({
    get() {
      return _props.open;
    },
    set(value) {
      _emits('update:open', value);
    },
  });
</script>
