<template>
  <sl-popup v-model:open="isOpen" :title="title">
    <view :class="[clz.root(), className]">
      <view :class="[clz.body()]" class="plr-l">
        <view
          v-for="(item, inx) in list"
          :key="clz.join('body', 'item', inx)"
          class="flex-between height-cell-default"
          :class="[{ 'border-bottom border-line-light': inx < list.length - 1 }]"
        >
          <view class="flex-grow text-ellipsis">{{ item.text }}</view>
        </view>
      </view>
    </view>
  </sl-popup>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-picker';
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
  const _emits = defineEmits(['update:open', 'change']);

  const isOpen = computed({
    get() {
      return _props.open;
    },
    set(value) {
      _emits('update:open', value);
    },
  });
</script>
