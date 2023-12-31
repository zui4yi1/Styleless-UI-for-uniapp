<template>
  <s-page title="sl-dropdown" className="plr-l">
    <Brief desc="组合筛选组件. 暂时仅支持下拉、排序、文字" />
    <Tip title="默认" desc="默认居中, 各项均占剩余空间" />
    <sl-dropdown className="mt-d">
      <sl-dropdown-item title="类型" :list="list" v-model:value="val" />
      <sl-dropdown-item title="价格" type="sort" />
      <sl-dropdown-item title="销售" type="text" />
      <sl-dropdown-item title="班级" type="cascade" v-model:value="clazz" :list="tree" />
    </sl-dropdown>
    <Tip
      title="左对齐"
      desc="scroll=false, 如果不喜欢居中或项比较多可使用此方式"
      className="mt-d"
    />
    <sl-dropdown :scroll="false" className="mt-d">
      <sl-dropdown-item title="类型" :list="list" v-model:value="val" />
      <sl-dropdown-item title="价格" type="sort" />
      <sl-dropdown-item title="销售" type="text" />
      <sl-dropdown-item title="日期" type="date" v-model:value="dateText" maxWidth="200rpx" />
    </sl-dropdown>
    <Tip title="下拉多选" className="mt-d" />
    <sl-dropdown :scroll="false" className="mt-d">
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
  const clazz = ref();
  const vals = ref([]);
  const dateText = ref('');
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

  const tree = [
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
