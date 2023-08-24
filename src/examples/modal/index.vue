<template>
  <s-page title="sl-modal" className="plr-l">
    <Brief desc="仿confirm的确定框, 可带标题，有多种关闭模式: 确定取消, 图标, 及点击空白区域" />
    <Tip title="默认" desc="默认带取消和确定" />
    <sl-button @click="open = true" className="mt-d">打开</sl-button>

    <Tip title="只有确定" desc="hasCancel=false" className="mt-d" />
    <sl-button @click="open2 = true" className="mt-d">打开</sl-button>

    <Tip title="无foot, 有关闭图标" desc="hasCancel=false" className="mt-d" />
    <sl-button @click="open3 = true" className="mt-d">打开</sl-button>

    <Tip title="点击任意空白处关闭" desc="hasCancel=false" className="mt-d" />
    <sl-button @click="open4 = true" className="mt-d">打开</sl-button>
  </s-page>
  <sl-modal v-model:open="open" title="提示">
    <view>ooooo</view>
  </sl-modal>
  <sl-modal v-model:open="open2" title="提示" :hasCancel="false">
    <view>ooooo</view>
  </sl-modal>
  <sl-modal v-model:open="open3" title="提示" :hasFoot="false" hasClose>
    <view>ooooo</view>
  </sl-modal>
  <sl-modal v-model:open="open4" title="提示" :hasFoot="false" closeOnTab>
    <view>ooooo</view>
  </sl-modal>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];
  const open = ref(false);
  const open2 = ref(false);
  const open3 = ref(false);
  const open4 = ref(false);
</script>
