<template>
  <view :class="[clz.root(), className]" class="">
    <sl-space-group :gutter="32" :rowGutter="12" :layout="direction === 'x' ? 'float' : 'block'">
      <sl-space-item
        v-for="(item, inx) in list"
        :key="'radio_' + inx"
        :className="[clz.body(), { 'opacity-disabled': disabled }]"
        @click="handleSelect(item.value)"
      >
        <sl-icon-text
          :className="[{ 'mb-xs': direction === 'y' }]"
          :name="iconName"
          :iconLib="iconLib"
          :label="item.label"
          :size="size"
          :labelClz="labelClz"
          :iconClz="
            [
              'radius-round border',
              value === item.value
                ? 'bg-primary border-transparent'
                : 'bg-white border-line-default',
            ].join(' ')
          "
        />
      </sl-space-item>
    </sl-space-group>
  </view>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-radio';
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
  import { props } from './_props';

  const _props = defineProps(props);
  const _emits = defineEmits(['update:value', 'change']);

  const handleSelect = (val: any) => {
    if (_props.disabled) return;
    _emits('update:value', val);
    _emits('change', val);
  };
</script>
