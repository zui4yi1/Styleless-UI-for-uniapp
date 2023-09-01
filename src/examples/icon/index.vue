<template>
  <s-page title="sl-icon" className="plr-l">
    <Brief
      desc="svg字体库、小图标icon库。本组件与图标库是非绑定的, 故在你刚导入本Styleless UI库时, sl-icon组件是不能使用的, 可在阿里巴巴矢量图标库中制作你自己的图标库。当然, 你也可把本UI库的字体库拷贝到你的工程中, 只是自带的icon不多, 都是基础组件常用的而已."
    />
    <Tip title="默认" desc="name=icon_add, color=placeholder, size=28" />
    <sl-icon />
    <Tip
      title="指定图标"
      desc="定义属性name即可. name=icon_loading | icon_close_fill | icon_search"
    />
    <sl-icon name="icon_loading" />
    <sl-icon name="icon_close_fill" />
    <sl-icon name="icon_search" />
    <Tip title="颜色" desc="color=primary | success | error" />
    <sl-icon color="primary" name="icon_check" />
    <sl-icon color="success" name="icon_check" />
    <sl-icon color="error" name="icon_check" />
    <Tip title="增大尺寸" desc="size=40" />
    <sl-icon color="success" name="icon_check" :size="40" />
    <Tip
      title="做成复选框"
      desc="name=icon_check, color=white, 再套个背景及边框就可以了. sl-checkbox组件就是这么玩的"
    />
    <sl-checkbox v-model:value="val" :list="list" className="mt-d" />
    <sl-checkbox v-model:value="val" :list="list" className="mt-d" type="square" />
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
</script>
