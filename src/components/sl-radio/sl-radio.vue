<template>
  <view :class="[clz.root(), className]" class="">
    <view
      v-for="(item, inx) in list"
      :key="'radio_' + inx"
      :class="[clz.body(), direction === 'x' ? 'flex-inline' : 'block']"
      @click="handleSelect(item.value)"
    >
      <sl-icon-text
        :name="iconName"
        :iconLib="iconLib"
        :label="item.label"
        :size="size"
        :labelClz="labelClz"
        :iconClz="
          [
            'radius-round border',
            value === item.value ? 'bg-primary border-transparent' : 'bg-white border-line-default',
          ].join(' ')
        "
      />
    </view>
  </view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-radio';
  const clz = useClassName(ComponentName);

  defineProps(props);
  const _emits = defineEmits(['update:value', 'change']);

  const handleSelect = (val: any) => {
    _emits('update:value', val);
    _emits('change', val);
  };
</script>
