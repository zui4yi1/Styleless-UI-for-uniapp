<template>
  <view :class="[clz.root(), className]" class="plr-d bg-white radius-default radius-top">
    <view :class="[clz.body()]" class="flex height-cell-default">
      <template v-if="mode === 'icon'">
        <view class="span-6 flex-shrink"></view>
        <view class="flex-grow flex-center bold">{{ title }}</view>
        <view class="span-6 flex-shrink flex-right">
          <sl-icon name="icon_close" color="placeholder" :size="40" @click="$emit('close')" />
        </view>
      </template>
      <template v-else-if="mode === 'text'">
        <view class="span-6 flex-shrink">
          <text class="color-placeholder" @click="$emit('close')">取消</text>
        </view>
        <view class="flex-grow flex-center bold">{{ title }}</view>
        <view class="span-6 flex-shrink flex-right">
          <text
            @click="
              $emit('close');
              $emit('confirm');
            "
            class="color-primary"
          >
            确定
          </text>
        </view>
      </template>
      <template v-else-if="mode === 'none'">
        <view class="flex-grow flex-center bold">{{ title }}</view>
      </template>
    </view>
  </view>
  <sl-line />
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-popup-head';
  const clz = useClassName(ComponentName);

  defineProps(props);
  defineEmits(['close', 'confirm']);
</script>
