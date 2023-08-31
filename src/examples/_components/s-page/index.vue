<template>
  <sl-page
    :title="title"
    :className="className"
    v-bind="themes[theme]"
    :homePath="homePath"
    :filterPages="filterPages"
    :autoHomeOrLeftIcon="autoHomeOrLeftIcon"
  >
    <template #navBarLeft><slot name="navBarLeft" /></template>
    <template #navBarRight><slot name="navBarRight" /></template>
    <slot />
  </sl-page>
</template>
<script setup lang="ts">
  import type { IThemeType } from './themes';

  import themes from './themes';
  interface IProps {
    title: string;
    className?: string | string[];
    theme?: IThemeType;
    autoHomeOrLeftIcon: boolean;
  }
  withDefaults(defineProps<IProps>(), {
    title: '',
    className: '',
    theme: 'default',
    autoHomeOrLeftIcon: true,
  });
  const filterPages = ['/examples/index/index'];
  const homePath = '/examples/index/index';

  // const theme = ref('default' as IThemeType);
</script>
