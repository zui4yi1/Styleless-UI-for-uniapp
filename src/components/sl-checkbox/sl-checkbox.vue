<template>
  <view :class="[clz.root(), className]" class="">
    <sl-space-group :gutter="32" :rowGutter="12" :layout="direction === 'x' ? 'float' : 'block'">
      <sl-space-item
        v-for="(item, inx) in list"
        :key="'checkbox_' + inx"
        :className="[clz.body(), { 'opacity-disabled': disabled }]"
        @click="handleSelect(item.value)"
      >
        <sl-icon-text
          :name="iconName"
          :iconLib="iconLib"
          :label="item.label"
          :size="iconSize"
          :labelClz="labelClz"
          :iconClz="
            [
              'border',
              iconClz,
              type === 'circle' ? 'radius-round' : '',
              (value || []).includes(item.value)
                ? 'bg-primary border-transparent'
                : 'bg-white border-line-deep',
            ].join(' ')
          "
        />
      </sl-space-item>
    </sl-space-group>
  </view>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-checkbox';
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
    const tempVals = [..._props.value];
    let inx = tempVals.findIndex((t) => t === val);
    if (inx === -1) tempVals.push(val);
    else tempVals.splice(inx, 1);

    _emits('update:value', tempVals);
    _emits('change', tempVals);
  };
</script>
