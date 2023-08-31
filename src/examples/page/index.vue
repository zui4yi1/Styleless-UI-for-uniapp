<template>
  <s-page title="sl-page" className="plr-l" :theme="theme">
    <Brief
      desc="页面根组件, 默认与sl-nav-bar导航栏组件集成一起。通常不直接使用, 而是要再封装一下, 作为‘场景组件’, 可以把系统的各种页面主题、首页路由等各种功能都集中封装一起"
    />

    <Tip
      title="切换导航栏风格与页面背景"
      desc="不同场景的页面，通常需要不同的导航栏风格及页面背景, 这些不同组合, 可在场景组件中统一定义"
      className="mt-d"
    />
    <sl-button className="mt-d" @click="handleToggleBg">顺序切换: 白, 蓝, 黄</sl-button>
  </s-page>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import type { IThemeType } from '../_components/s-page/themes';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['default', 'primary', 'warnning'] as IThemeType[];

  const theme = ref('default' as IThemeType);
  const count = ref(0);

  const handleToggleBg = () => {
    count.value = count.value === 2 ? 0 : count.value + 1;
    theme.value = themes[count.value];
  };
</script>
