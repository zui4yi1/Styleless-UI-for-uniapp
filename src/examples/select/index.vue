<template>
  <s-page title="sl-select" className="plr-l">
    <Brief desc="下拉弹窗组件, 可单选或多选, 下拉选项可使用插糟自定义" />
    <Tip title="点击查看效果" />
    <view class="flex mt-d">
      <sl-button @click="open1 = true" className="mr-l" width="200rpx">单选</sl-button>
      <sl-button @click="open2 = true" width="200rpx">多选</sl-button>
    </view>
  </s-page>
  <sl-select v-model:open="open1" v-model:value="val" :list="list"></sl-select>
  <sl-select v-model:open="open2" v-model:value="val2" :list="list" multiple></sl-select>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];
  const open1 = ref(false);
  const open2 = ref(false);

  const val = ref('');
  const val2 = ref([]);
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
