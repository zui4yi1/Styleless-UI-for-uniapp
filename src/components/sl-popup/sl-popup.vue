<template>
  <sl-mask :closeOnTab="closeOnTab" mode="bottom" v-model:open="isOpen">
    <view :class="[clz.root()]" class="bg-white">
      <sl-popup-head
        :title="title"
        :mode="mode"
        @close="isOpen = false"
        @confirm="$emit('confirm')"
      />

      <view :class="[clz.body()]">
        <slot />
        <sl-fill-line isBottom className="pt-xs" />
      </view>
    </view>
  </sl-mask>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import { useClassName } from '../../hooks/use-class-name';
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
