<template>
  <s-page title="sl-checkbox" className="plr-l">
    <Brief
      desc="主要属性value和list, 其它还有方向direction, 形状type, 尺寸size等（与sl-radio基本属性一样, 除了value是数组及多了type形状）"
    />

    <Tip title="默认" desc="v-model:value=val, list=list" />
    <sl-checkbox v-model:value="val" :list="list" className="mt-d" />

    <Tip title="垂直方向" desc="direction=y" className="mt-d" />
    <sl-checkbox v-model:value="val" :list="list" direction="y" className="mt-d" />

    <Tip title="禁用" desc="disabled=true" className="mt-d" />
    <sl-checkbox v-model:value="val" :list="list" disabled className="mt-d" />

    <Tip title="圆形" desc="type=circle 默认方块" />
    <sl-checkbox v-model:value="val" :list="list" type="circle" className="mt-d" />

    <Tip title="文字换行" desc="文字太多时, 会自动换行, 当然最好使用垂直模式" className="mt-d" />
    <sl-checkbox v-model:value="val" direction="y" :list="list2" className="mt-d" />
  </s-page>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];

  const val = ref([]);
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
