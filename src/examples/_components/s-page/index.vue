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
    <sl-fill-line v-if="hasBottom" size="button-default" />
  </sl-page>
</template>
<script lang="ts">
  const ComponentName = 's-page';
  export default {
    name: ComponentName,
    options: {
      virtualHost: true,
      inheritAttrs: false,
    },
  };
</script>
<script setup lang="ts">
  import type { IThemeType } from './themes';

  import themes from './themes';
  interface IProps {
    title: string;
    className?: string | string[];
    theme?: IThemeType;
    autoHomeOrLeftIcon?: boolean;
    hasBottom?: boolean;
  }
  withDefaults(defineProps<IProps>(), {
    title: '',
    className: '',
    theme: 'default',
    autoHomeOrLeftIcon: true,
    hasBottom: true,
  });
  const filterPages = ['/examples/index/index'];
  const homePath = '/examples/index/index';
</script>
