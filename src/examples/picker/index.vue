<template>
  <s-page title="sl-picker" className="plr-l">
    <Brief desc="多列联动组件, 迭代算法支持任意多列(只要放得下), 但必须手动指定有多少列默认3" />
    <Tip
      title="默认"
      desc="参数主要是v-model:open,  v-model:value, list(树形式), title, 及columns(默认3)"
    />
    <view>选中值：{{ val }}</view>
    <view>标签名:{{ labels }}</view>
    <sl-button @click="open1 = true" className="mt-d">打开</sl-button>
    <sl-button @click="getLabel" className="mt-d">标签名</sl-button>
    <sl-picker ref="pickRef" v-model:open="open1" title="请选择" v-model:value="val" :list="list" />
  </s-page>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];
  const open1 = ref(false);

  const val = ref([]);
  const pickRef = ref(null as any);
  const labels = ref('');
  const getLabel = () => {
    labels.value = pickRef.value?.getLabels();
  };
  const list = [
    {
      label: '高中',
      value: 'h',
      children: [
        {
          label: '高一',
          value: 'h1',
          children: [
            { label: '高一1班', value: 'h11' },
            { label: '高一2班', value: 'h12' },
          ],
        },
        {
          label: '高二',
          value: 'h2',
          children: [
            { label: '高二1班', value: 'h21' },
            { label: '高二2班', value: 'h22' },
          ],
        },
        {
          label: '高三',
          value: 'h3',
          children: [
            { label: '高三1班', value: 'h31' },
            { label: '高三2班', value: 'h32' },
          ],
        },
      ],
    },
    {
      label: '初中',
      value: 'c',
      children: [
        {
          label: '初一',
          value: 'c1',
          children: [
            { label: '初一1班', value: 'c11' },
            { label: '初一2班', value: 'c12' },
          ],
        },
        {
          label: '初二',
          value: 'c2',
          children: [
            { label: '初二1班', value: 'c21' },
            { label: '初二2班', value: 'c22' },
          ],
        },
      ],
    },
  ];
</script>
