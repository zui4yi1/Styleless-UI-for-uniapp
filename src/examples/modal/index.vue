<template>
  <s-page title="sl-modal" className="plr-l">
    <Brief
      desc="仿confirm的确定框, 可带标题, 用法的话, 主要是有无标题、有无底部, 及多种关闭模式的区别: 确定取消, 图标, 及点击外界区域"
    />
    <Tip title="默认" desc="默认底部带取消和确定按钮" />
    <sl-button @click="open = true" className="mt-d">打开</sl-button>

    <Tip title="无取消、有确定按钮" desc="hasCancel=false" className="mt-d" />
    <sl-button @click="open2 = true" className="mt-d">打开</sl-button>

    <Tip
      title="无foot, 即无取消和确定, 但有关闭图标"
      desc="hasFoot=false, hasClose=true"
      className="mt-d"
    />
    <sl-button @click="open3 = true" className="mt-d">打开</sl-button>

    <Tip title="点击外界区域关闭" desc="hasFoot=false, closeOnTab=true" className="mt-d" />
    <sl-button @click="open4 = true" className="mt-d">打开</sl-button>
  </s-page>
  <sl-modal v-model:open="open" title="提示">
    <view class="font-secondary color-placeholder">自定义...</view>
  </sl-modal>
  <sl-modal v-model:open="open2" title="提示" :hasCancel="false">
    <view class="font-secondary color-placeholder">自定义...</view>
  </sl-modal>
  <sl-modal v-model:open="open3" title="提示" :hasFoot="false" hasClose>
    <view class="font-secondary color-placeholder">自定义...</view>
  </sl-modal>
  <sl-modal v-model:open="open4" title="提示" :hasFoot="false" closeOnTab>
    <view class="font-secondary color-placeholder">自定义...</view>
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
