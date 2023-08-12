<template>
  <view class="plr-l">
    <view>
      <text>bbb</text>
    </view>

    <view class="flex">
      <text>确定</text>
      <sl-icon />
      <sl-icon color="primary" />
      <sl-icon size="48" />

      <sl-icon name="loading" className="spin" />
    </view>
    <sl-popup v-model:open="isOpen" title="请选择一个" :closeOnTab="false">
      <view class="rect-200">测试</view>
    </sl-popup>
    <view>{{ isOpen }}</view>
    <sl-button :icon="{ name: 'icon_add' }" @click="isOpen = true">
      <view>打开mask</view>
    </sl-button>
    <!-- <sl-button className="mt-d">
      <sl-icon className="pr-xxs" />
      <view>确定</view>
    </sl-button>
    <sl-card className="mt-d">aaaa</sl-card>

    <sl-row className="mt-d" radius="default" height="160">
      <sl-col bg="primary">第一个</sl-col>
      <sl-col>第二个</sl-col>
      <sl-col>第三个</sl-col>
      <sl-col>第四个</sl-col>
      <sl-col>第五个</sl-col>
    </sl-row>
    <sl-empty bg="placeholder" content="暂无数据" type="inline">
      <view class="color-primary">没有数据</view>
    </sl-empty>
    <sl-line className="mt-d" />
    <sl-space-group className="mt-d">
      <sl-space-item><view class="w-120 bg-primary">第一个</view></sl-space-item>
      <sl-space-item><view class="w-120 bg-placeholder color-white">第二个</view></sl-space-item>
      <sl-space-item>第三个</sl-space-item>
      <sl-space-item>第四个</sl-space-item>
      <sl-space-item>第五个</sl-space-item>
      <sl-space-item><view class="w-120 bg-placeholder color-white">第二个</view></sl-space-item>
      <sl-space-item><view class="w-120 bg-placeholder color-white">第二个</view></sl-space-item>
      <sl-space-item><view class="w-120 bg-placeholder color-white">第二个</view></sl-space-item>
      <sl-space-item><view class="w-120 bg-placeholder color-white">第二个</view></sl-space-item>
      <sl-space-item><view class="w-120 bg-placeholder color-white">第二个</view></sl-space-item>
    </sl-space-group>
    <view class="mt-d w-120 bg-placeholder color-white">第二个</view> -->
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  // eslint-disable-next-line no-unused-vars

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const title = ref('Hello');
  const isOpen = ref(false);
</script>
