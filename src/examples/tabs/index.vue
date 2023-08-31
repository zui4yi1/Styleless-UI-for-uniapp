<template>
  <s-page title="sl-tabs" className="plr-l">
    <Brief desc="tabs标签页, 滚动和居中二种模式, 可带角标(可自定义)" />
    <Tip title="居中(默认)" desc="各项均占剩余空间，注意如果数量太多会挤在一起" />
    <sl-tabs :list="list.slice(0, 3)" className="mt-d" />
    <Tip
      title="滚动模式"
      desc="scroll=true. 如果不喜欢居中, 或者数量多, 可用滚动模式"
      className="mt-d"
    />
    <sl-tabs :list="list.slice(0, 3)" className="mt-d" scroll />
    <sl-tabs :list="list" scroll className="mt-d" />
    <Tip title="初始指定选中某项" desc="v-model:current=current" className="mt-d" />
    <sl-tabs v-model:current="current" :list="list" scroll className="mt-d" />

    <Tip title="角标" desc="item.count=10, 风格可自定义" className="mt-d" />
    <sl-tabs v-model:current="current" :list="list2" scroll className="mt-d" />
  </s-page>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];

  const current = ref(4);

  const list = [
    {
      name: '数学',
    },
    {
      name: '语文',
    },
    {
      name: '英语英语',
    },
    {
      name: '物理',
    },
    {
      name: '化学',
    },
    {
      name: '生物',
    },
    {
      name: '体育',
    },
    {
      name: '历史',
    },
    {
      name: '地理',
    },
    {
      name: '政治',
    },
  ];

  const list2 = [
    {
      name: '数学',
    },
    {
      name: '语文',
    },
    {
      name: '英语',
    },
    {
      name: '物理',
    },
    {
      name: '化学',
      count: 10,
    },
    {
      name: '生物',
    },
    {
      name: '体育',
    },
    {
      name: '历史',
    },
    {
      name: '地理',
    },
    {
      name: '政治',
    },
  ];
</script>
