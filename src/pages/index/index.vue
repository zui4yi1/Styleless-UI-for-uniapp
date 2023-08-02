<template>
  <view>
    <view>
      <text>aaa</text>
    </view>
    <view class="flex">
      <text>abc</text>
      <sl-icon />
      <sl-icon color="primary" />
      <sl-icon size="48" />

      <sl-icon name="loading" className="spin" />
    </view>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  // eslint-disable-next-line no-unused-vars

  const title = ref('Hello');
</script>
