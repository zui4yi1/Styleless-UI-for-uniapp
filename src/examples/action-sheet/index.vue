<template>
  <s-page title="sl-action-sheet" className="plr-l">
    <Brief desc="操作菜单弹窗" />
    <Tip title="默认" desc="超过5个时显示滚动条" />
    <sl-button @click="open1 = true" className="mt-d">打开</sl-button>
    <sl-action-sheet v-model:open="open1" :list="list" title="请选择操作类型" />
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
  const list = [
    {
      text: '新增',
      color: 'primary',
    },
    {
      text: '编辑',
      color: 'content',
    },
    {
      text: '不可点击',
      color: 'disabled',
      disabled: true,
    },
    {
      text: '其它1',
    },
    {
      text: '其它2',
    },
    {
      text: '删除',
      color: 'error',
    },
  ];
</script>
