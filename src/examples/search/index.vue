<template>
  <s-page title="sl-search" className="plr-l">
    <Brief desc="XXXX" />
    <Tip title="测试" />
    <sl-search v-model:value="val" />
    <sl-search v-model:value="val" bg="fill-default" className="mt-d" />
    <div class="p-all-l bg-fill-default mt-d">
      <sl-search v-model:value="val" />
    </div>
  </s-page>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];

  const val = ref();
</script>
