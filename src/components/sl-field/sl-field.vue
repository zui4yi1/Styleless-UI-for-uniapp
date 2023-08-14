<template>
  <slot :value="value" @change="change" />
</template>
<script setup lang="ts">
  import { props } from './_props';
  const _props = defineProps(props);
  const _emits = defineEmits(['change', 'update:value']);

  const change = (val: string) => {
    _emits('update:value', val);
    _emits('change', val);
  };

  defineExpose({
    value: _props.value,
    change,
  });
</script>
