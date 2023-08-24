<template>
  <s-page title="sl-radio" className="plr-l">
    <Brief
      desc="主要属性value和list, 其它还有方向direction, 尺寸size等（与sl-checkbox基本属性一样, 除了value不是数组及没有type形状）"
    />

    <Tip title="默认" desc="默认为水平方向, 圆形" />
    <sl-radio v-model:value="val" :list="list" className="mt-d" />

    <Tip title="垂直方向" desc="direction=y" className="mt-d" />
    <sl-radio v-model:value="val" :list="list" direction="y" className="mt-d" />

    <Tip title="disabled" desc="disabled=true" className="mt-d" />
    <sl-radio v-model:value="val" :list="list" disabled className="mt-d" />

    <Tip
      title="文字换行, 使用垂直模式"
      desc="文字太多时, 会自动换行。但因换行后, 行间距不容易控制, 故请直接使用垂直模式"
      className="mt-d"
    />
    <sl-radio v-model:value="val" :list="list2" direction="y" className="mt-d" />
  </s-page>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];
  const val = ref('');
  const list = [
    {
      label: '数学',
      value: 0,
    },
    {
      label: '语文',
      value: 1,
    },
    {
      label: '英语',
      value: 2,
    },
    {
      label: '数学',
      value: 3,
    },
  ];

  const list2 = [
    {
      label: '数学',
      value: 0,
    },
    {
      label: '语文',
      value: 1,
    },
    {
      label:
        '文字比较多比较多比较多比较多比较多比较多比较多比较多比较多比较多比较多比较多比较多比较多',
      value: 2,
    },
    {
      label: '数学',
      value: 3,
    },
  ];
</script>
