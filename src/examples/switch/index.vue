<template>
  <s-page title="sl-switch" className="plr-l">
    <Brief
      desc="主要属性value和disabled。 另外还有2个属性height和width, 用于设置尺寸（注意都必须为4的倍数）"
    />
    <Tip title="默认" desc="v-model:value=val" />
    <sl-switch v-model:value="val" />

    <Tip title="禁用" desc="disabled" className="mt-d" />
    <sl-switch v-model:value="val" disabled />

    <Tip
      title="其它任意尺寸"
      desc="高度height, 矩形宽度width(即实际宽度为height+width)"
      className="mt-d"
    />
    <sl-switch v-model:value="val" :height="40" :width="20" className="mt-d" />
    <sl-switch v-model:value="val" :height="40" :width="40" className="mt-d" />
    <sl-switch v-model:value="val" :height="40" :width="60" className="mt-d" />
  </s-page>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const val = ref('');
</script>
