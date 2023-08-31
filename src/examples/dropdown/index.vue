<template>
  <s-page title="sl-dropdown" className="plr-l">
    <Brief desc="暂时支持下拉、排序、文字及自定义" />
    <Tip title="默认" desc="默认居中" />

    <sl-dropdown className="mt-d">
      <sl-dropdown-item title="类型" :list="list" v-model:value="val" />
      <sl-dropdown-item title="价格" type="sort" />
      <sl-dropdown-item title="销售" type="text" />
    </sl-dropdown>
    <Tip title="左对齐" desc="isScroll=false" className="mt-d" />
    <sl-dropdown :isScroll="false" className="mt-d">
      <sl-dropdown-item title="类型" :list="list" v-model:value="val" />
      <sl-dropdown-item title="价格" type="sort" />
      <sl-dropdown-item title="销售" type="text" />
    </sl-dropdown>
    <Tip title="下拉多选" className="mt-d" />
    <sl-dropdown :isScroll="false" className="mt-d">
      <sl-dropdown-item title="类型" :list="list" mutilple v-model:value="vals" />
      <sl-dropdown-item title="价格" type="sort" />
      <sl-dropdown-item title="销售" type="text" />
    </sl-dropdown>
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
  const vals = ref([]);
  const list = [
    {
      label: '数学',
      value: 1,
    },
    {
      label: '语文',
      value: 2,
    },
  ];
</script>
