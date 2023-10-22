<template>
  <sl-mask mode="bottom" v-model:open="isOpen" :closeOnTab="false">
    <view :class="[clz.root(), className]" class="mlr-d">
      <view :class="[clz.body()]" class="bg-white radius-default">
        <sl-popup-head
          :title="title"
          mode="none"
          @close="isOpen = false"
          @confirm="$emit('confirm')"
        />
        <scroll-view scroll-y :style="{ maxHeight: `${5.6 * 88}rpx` }">
          <view
            v-for="(item, inx) in list"
            :key="clz.join('body', 'item', inx)"
            @click="handleClick(item, inx)"
          >
            <view class="flex-center height-cell-default w100 plr-l border-box">
              <slot name="item" :item="item" :inx="inx">
                <view
                  class="text-ellipsis"
                  :class="[`color-${item.disabled ? 'disabled' : item.color || 'content'}`]"
                >
                  {{ item.text }}
                </view>
              </slot>
            </view>
            <sl-line v-if="inx < list.length - 1" />
          </view>
        </scroll-view>
      </view>
      <view
        :class="[clz.foot()]"
        class="flex-center height-cell-default bg-white radius-default mtb-d"
        @click="isOpen = false"
      >
        <view class="color-secondary">取消</view>
      </view>
    </view>
  </sl-mask>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-action-sheet';
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
