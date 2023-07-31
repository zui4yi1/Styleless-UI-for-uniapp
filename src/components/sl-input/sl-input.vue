<template>
  <view :class="[ComponentName, className]"></view>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  // ComponentName and childContainerClassName
  const ComponentName = 'sl-input';
  const childContainerClassName = (suffixName: string) => [ComponentName, suffixName].join('-');

  // define props
  interface IProps {
    className?: string | string[];
  }
  const props = withDefaults(defineProps<IProps>(), {
    className: '',
  });

  // define emits
  // const emites = defineEmits(['']);

  const hello = ref('Hello');
</script>
