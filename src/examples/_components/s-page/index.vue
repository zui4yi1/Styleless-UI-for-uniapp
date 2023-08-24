<template>
  <sl-page :title="title" :className="className" :homePath="homePath" :filterPages="filterPages">
    <slot />
  </sl-page>
</template>
<script setup lang="ts">
  interface IProps {
    title: string;
    className?: string | string[];
  }
  withDefaults(defineProps<IProps>(), {
    title: '',
    className: '',
  });
  const filterPages = ['/examples/index/index'];
  const homePath = '/examples/index/index';
</script>
