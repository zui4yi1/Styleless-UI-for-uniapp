<template>
  <s-page title="sl-popup" className="plr-l">
    <Brief desc="内容区都是插糟自定义，主要是标题的区别，有文字和简洁图标二种" />
    <Tip title="默认" />
    <view class="flex">
      <sl-button @click="open1 = true" className="mr-l flex-grow">文字</sl-button>
      <sl-button @click="open2 = true" className=" flex-grow">图标</sl-button>
    </view>
  </s-page>
  <sl-popup v-model:open="open1" mode="text" title="标题标题">
    <view class="p-all-l">{{ '自定义'.repeat(20) }}</view>
  </sl-popup>
  <sl-popup v-model:open="open2" mode="icon" title="标题标题">
    <view class="p-all-l">{{ '自定义'.repeat(20) }}</view>
  </sl-popup>
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
</script>
