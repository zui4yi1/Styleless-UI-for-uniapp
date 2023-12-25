<template>
  <s-page title="sl-tags" className="plr-l">
    <Brief desc="XXXX" />
    <Tip title="测试" />
    <sl-tags label="标签" color="white" />
    <sl-tags label="标签" color="white" bodyClz=" radius-cell-default plr-l ptb-xs" class="" />
    <sl-tags label="标签" type="text" color="primary" />
    <sl-tags :list="tags" showDelete />
    <sl-tags :list="tags" />
    <sl-tags :list="tags" type="text" />
  </s-page>
</template>
<script setup lang="ts">
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];
  const tags = [
    {
      label: '标签1',
      bg: 'success',
    },
    {
      label: '标签2',
    },
    {
      label: '标签2666666666666666666655555555555555566666666666666666',
    },
    {
      label: '标签2',
    },
    {
      label: '标签2',
    },
    {
      label: '标签2',
    },
    {
      label: '标签2',
    },
    {
      label: '标签2',
    },
    {
      label: '标签2',
    },
    {
      label: '标签2',
    },
    {
      label: '标签2',
    },
  ];
</script>
