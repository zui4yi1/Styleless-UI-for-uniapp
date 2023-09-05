<template>
  <view :class="[clz.root(), className]" class="">
    <view
      v-for="(item, inx) in list"
      :key="'checkbox_' + inx"
      :class="[
        clz.body(),
        direction === 'x' ? 'flex-inline' : 'block',
        { 'opacity-disabled': disabled },
      ]"
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
            'border',
            type === 'circle' ? 'radius-round' : '',
            value.includes(item.value)
              ? 'bg-primary border-transparent'
              : 'bg-white border-line-default',
          ].join(' ')
        "
      />
    </view>
  </view>
</template>
<script setup lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-checkbox';
  const clz = useClassName(ComponentName);

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
