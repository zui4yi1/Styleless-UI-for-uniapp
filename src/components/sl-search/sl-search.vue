<template>
  <div :class="[clz.root(), className]">
    <sl-input
      v-model:value="_value"
      :radius="radius"
      :paddingClz="paddingClz"
      :borderClz="borderClz"
      :bg="bg"
      :leftIcon="leftIcon"
      @onLeft="handleSearch"
    />
  </div>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-search';
  const clz = useClassName(ComponentName);
  export default {
    name: ComponentName,
    options: {
      virtualHost: true,
      inheritAttrs: false,
    },
  };
</script>

<script setup lang="ts">
  import { debounce } from 'lodash-es';
  import { computed, watch } from 'vue';
  import { props } from './_props';

  const _props = defineProps(props);
  const _emits = defineEmits(['update:value', 'search']);

  const _value = computed({
    get() {
      return _props.value;
    },
    set(val) {
      _emits('update:value', val);
    },
  });
  const handleSearch = debounce(() => {
    _emits('search', _value);
  }, 200);

  watch(
    () => _value.value,
    () => {
      _props.isAutoSearch && handleSearch();
    },
  );
</script>
