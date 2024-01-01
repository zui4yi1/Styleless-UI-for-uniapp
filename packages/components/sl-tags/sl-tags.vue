<template>
  <view :class="[clz.root(), className]" class="">
    <sl-space-group :gutter="16" :rowGutter="12">
      <sl-space-item
        v-for="(item, inx) in _list"
        :key="'tag_' + inx"
        :className="[clz.body()]"
        @click="handleClick(inx)"
      >
        <view
          v-if="type === 'bg'"
          :class="[
            clz.body(),
            bodyClz,
            `height-${size}`,
            `bg-${item.bg || bg}`,
            `color-${color}`,
            `radius-${radius}`,
            `font-${font}`,
          ]"
          class="text flex-inline"
        >
          {{ item.label }}
          <sl-icon v-if="showDelete" name="icon_close_fill" color="white" className="ml-xxs" />
        </view>
        <text v-else :class="[`color-${color}`]" class="text">{{ item.label }}</text>
      </sl-space-item>
    </sl-space-group>
  </view>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import { useClassName } from '../../hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-tags';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);
  const _emits = defineEmits(['click']);

  const _list = computed(() => {
    if ((_props.list || []).length) return _props.list;
    return [{ label: _props.label }];
  });

  const handleClick = (inx: number) => {
    _emits('click', inx);
  };
</script>
