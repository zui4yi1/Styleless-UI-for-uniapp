<template>
  <sl-page
    :title="title"
    :className="className"
    v-bind="themes[theme]"
    :homePath="homePath"
    :filterPages="filterPages"
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
  }
  withDefaults(defineProps<IProps>(), {
    title: '',
    className: '',
    theme: 'default',
  });
  const filterPages = ['/examples/index/index'];
  const homePath = '/examples/index/index';

  // const theme = ref('default' as IThemeType);
</script>
