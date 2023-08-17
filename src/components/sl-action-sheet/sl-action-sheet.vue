<template>
  <sl-popup v-model:open="isOpen" :title="title" mode="icon">
    <view :class="[clz.root(), className]">
      <view :class="[clz.body()]" class="plr-l">
        <view
          v-for="(item, inx) in list"
          :key="clz.join('body', 'item', inx)"
          class="flex-center height-cell-default w100"
          :class="[{ 'border-bottom border-line-light': inx < list.length - 1 }]"
          @click="handleClick(item, inx)"
        >
          <slot name="item" :item="item" :inx="inx">
            <view
              class="text-ellipsis"
              :class="[`color-${item.disabled ? 'disabled' : item.color || 'content'}`]"
            >
              {{ item.text }}
            </view>
          </slot>
        </view>
      </view>
      <view :class="[clz.foot()]" class="flex-center height-cell-default" @click="isOpen = false">
        <view class="color-placeholder">取消</view>
      </view>
    </view>
  </sl-popup>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { computed } from 'vue';
  import { props } from './_props';

  const ComponentName = 'sl-action-sheet';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);
  const _emits = defineEmits(['update:open', 'select']);

  const isOpen = computed({
    get() {
      return _props.open;
    },
    set(value) {
      _emits('update:open', value);
    },
  });

  const handleClick = (item: any, inx: number) => {
    if (item.disabled) return;
    _emits('select', inx);
    _emits('update:open', false);
  };
</script>
