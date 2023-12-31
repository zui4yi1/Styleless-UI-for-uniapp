<template>
  <sl-mask :closeOnTab="closeOnTab" mode="bottom" v-model:open="isOpen">
    <view :class="[clz.root()]" class="bg-white">
      <sl-popup-head
        :title="title"
        :mode="mode"
        @close="
          isOpen = false;
          $emit('close');
        "
        @confirm="$emit('confirm')"
      />

      <view :class="[clz.body()]">
        <slot />
        <sl-fill-line isBottom className="pt-xs" />
      </view>
    </view>
  </sl-mask>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-popup';
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
  import { computed } from 'vue';
  import { props } from './_props';

  const _props = defineProps(props);
  const _emits = defineEmits(['update:open', 'confirm', 'close']);

  const isOpen = computed({
    get() {
      return _props.open;
    },
    set(value) {
      _emits('update:open', value);
    },
  });
</script>
