<template>
  <s-page title="sl-space-group" className="plr-l">
    <Brief desc="具有inline及自动换行效果的容器" />
    <Tip title="测试" />
  </s-page>
</template>
<script setup lang="ts">
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];
</script>
