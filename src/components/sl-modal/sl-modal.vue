<template>
  <sl-mask v-model:open="isOpen" :closeOnTab="closeOnTab" mode="center">
    <view :class="[clz.root(), className]">
      <sl-card paddingClz="plr-l">
        <view :class="[clz.head()]" class="height-cell-default flex">
          <view class="font-title flex-grow">{{ title }}</view>
          <view v-if="hasClose" class="flex-shrink flex flex-right w-80" @click="isOpen = false">
            <sl-icon name="icon_close" />
          </view>
        </view>
        <view :class="[clz.body()]" class="pb-d">
          <slot />
        </view>
        <view v-if="hasFoot" :class="[clz.foot()]" class="flex-center">
          <view v-if="hasCancel" class="span-12">
            <sl-button :theme="{ bg: 'white', color: 'placeholder' }" @click="isOpen = false">
              取消
            </sl-button>
          </view>
          <view class="span-12">
            <sl-button :theme="{ bg: 'white', color: 'base' }" @click="handleConfirm">
              确定
            </sl-button>
          </view>
        </view>
      </sl-card>
    </view>
  </sl-mask>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { computed } from 'vue';
  import { props } from './_props';

  const ComponentName = 'sl-modal';
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

  const handleConfirm = () => {
    _emits('update:open', false);
    _emits('confirm');
  };
</script>
