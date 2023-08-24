<template>
  <s-page title="sl-button" className="plr-l">
    <Tip title="常用主色" />
    <sl-button v-for="theme in themes" :bg="theme" :key="theme" className="mb-d">
      {{ theme }}
    </sl-button>
    <sl-button
      color="primary"
      bg="white"
      bodyClazz="border border-primary border-thick"
      hover-class="bg-disabled"
    >
      plain
    </sl-button>
    <Tip title="带图标" />
    <sl-button :icon="{ name: 'icon_check', color: 'white' }">确定</sl-button>
    <sl-button
      :icon="{ name: 'icon_loading', color: 'white', className: 'mr-xs spin' }"
      className="mt-d"
    >
      加载中
    </sl-button>
    <Tip title="禁用" />
    <sl-button v-for="theme in themes" disabled :bg="theme" :key="theme" className="mb-d">
      {{ theme }}
    </sl-button>
    <sl-button
      color="primary"
      bg="white"
      bodyClazz="border border-primary border-thick"
      hover-class="bg-disabled"
      disabled
    >
      plain
    </sl-button>
    <Tip title="其它尺寸" />
    <sl-button size="button-small">确定</sl-button>
    <sl-button size="button-small" width="120rpx" className="mt-d">确定</sl-button>
  </s-page>
</template>
<script setup lang="ts">
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';
  const themes = ['primary', 'success', 'error'];
</script>
