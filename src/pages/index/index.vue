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
    <sl-button :icon="{ name: 'icon_add' }">
      <view>确定</view>
    </sl-button>
    <sl-button className="mt-d">
      <sl-icon className="pr-xxs" />
      <view>确定</view>
    </sl-button>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  // eslint-disable-next-line no-unused-vars

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const title = ref('Hello');
</script>
