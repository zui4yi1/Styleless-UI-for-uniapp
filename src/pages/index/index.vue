<template>
  <view>
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
  const title = ref('Hello');
  alert(2);
</script>
