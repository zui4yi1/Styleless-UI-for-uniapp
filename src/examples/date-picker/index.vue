<template>
  <s-page title="sl-date-picker" className="plr-l">
    <Brief desc="">
      <view>1. 可分别选年月日三种格式</view>
      <view>
        2. 可指定范围。注意, 初始值会受范围的影响, 若初始值不在范围内, 则会自动选中相应的边界日期
      </view>
    </Brief>
    <Tip title="测试" />
    <view>已选择的日期:{{ val }}</view>
    <sl-button @click="open1 = true" className="mt-d">打开</sl-button>
    <sl-date-picker v-model:open="open1" title="请选择" v-model:value="val" />
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
  const val = ref('2023-08-05');
</script>
