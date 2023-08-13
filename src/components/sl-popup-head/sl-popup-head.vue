<template>
  <view :class="[clz.root(), className]" class="plr-d bg-white radius-default radius-top">
    <view :class="[clz.body()]" class="flex height-cell-default">
      <template v-if="mode === 'icon'">
        <view class="span-6 flex-shrink"></view>
        <view class="flex-grow flex-center font-title bold">{{ title }}</view>
        <view class="span-6 flex-shrink flex-right" @click="$emit('close')">
          <sl-icon />
        </view>
      </template>
      <template v-else-if="mode === 'text'">
        <view class="span-6 flex-shrink" @click="$emit('close')">取消</view>
        <view class="flex-grow flex-center flex-center font-title">{{ title }}</view>
        <view
          class="span-6 flex-shrink flex-right"
          @click="
            $emit('close');
            $emit('confirm');
          "
        >
          确定
        </view>
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
