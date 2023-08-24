<template>
  <s-page title="sl-input" className="plr-l">
    <Brief desc="除了尺寸和字体外, 还提供了 borderClz, radius, bg等属性, 可任意定制样式" />

    <Tip title="默认" desc="默认带下边框" className="mt-d" />
    <sl-input v-model:value="inputVal" />

    <Tip title="换背景" className="mt-d" />
    <sl-input v-model:value="inputVal" radius="default" bg="fill-default" borderClz="border-none" />

    <Tip title="四周边框" className="mt-d" />
    <sl-input v-model:value="inputVal" borderClz="border" />

    <Tip title="四周边框、圆角" className="mt-d" />
    <sl-input v-model:value="inputVal" borderClz="border" radius="default" />

    <Tip title="无边框、周围带背景" desc="四周有背景区分, 主要是去边框" className="mt-d" />
    <view class="bg-fill-default p-all-xl">
      <sl-input v-model:value="inputVal" borderClz="border-none" radius="default" />
    </view>
  </s-page>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];

  const inputVal = ref('');
</script>
