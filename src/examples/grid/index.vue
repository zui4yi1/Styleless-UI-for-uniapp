<template>
  <s-page title="sl-row/sl-col" className="plr-l">
    <Brief desc="通过row/col实现grid, 需设置高度" />
    <Tip title="四列应用列表" desc="height=160" />
    <sl-row :height="160" radius="default">
      <sl-col v-for="color in themes" :key="color" :bg="color" bodyClz="p-all-d color-white">
        {{ color }}
      </sl-col>
    </sl-row>
  </s-page>
</template>
<script setup lang="ts">
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error', 'pink', 'purple'];
</script>
