<template>
  <sl-popup v-model:open="isOpen" :title="title" @confirm="handleConfirm">
    <view :class="[clz.root(), className]">
      <scroll-view
        :class="[clz.body()]"
        class="plr-l border-box w100"
        scroll-y
        :style="{ maxHeight: '500rpx' }"
      >
        <view
          v-for="(item, inx) in list"
          :key="clz.join('body', 'item', inx)"
          class="flex-between height-cell-default"
          :class="[{ 'border-bottom border-line-light': inx < list.length - 1 }]"
          @click="handleSelect(item, inx)"
        >
          <view class="flex-grow text-ellipsis">
            {{ item.label }}
          </view>
          <view class="flex-shrink ml-l w-80 flex-right">
            <sl-icon
              v-if="tempValue.includes(item.value)"
              name="icon_check"
              :size="40"
              color="primary"
            />
          </view>
        </view>
      </scroll-view>
    </view>
  </sl-popup>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { computed, ref, toRaw, watchEffect } from 'vue';
  import { props, type ICompSelect } from './_props';

  const ComponentName = 'sl-select';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);
  const _emits = defineEmits(['update:open', 'change', 'update:value', 'confirm']);

  const tempValue = ref([] as any[]);

  const isOpen = computed({
    get() {
      return _props.open;
    },
    set(value) {
      _emits('update:open', value);
    },
  });

  const handleSelect = (item: ICompSelect, index: number) => {
    if (item.disabled) return;

    if (_props.multiple) {
      let inx = tempValue.value.findIndex((t) => t === item.value);
      if (inx === -1) tempValue.value.push(item.value);
      else tempValue.value.splice(inx, 1);
      _emits('change', { value: tempValue.value, index });
    } else {
      tempValue.value = [item.value];
      _emits('change', { value: tempValue.value[0], index });
    }
  };

  watchEffect(() => {
    if (_props.open) {
      tempValue.value = _props.multiple ? [...(_props.value as any[])] : [_props.value];
    } else {
      tempValue.value = [];
    }
  });

  const handleConfirm = () => {
    if (_props.multiple) {
      const vals = [...toRaw(tempValue.value)];
      _emits('update:value', vals);
      _emits('confirm', vals);
    } else {
      _emits('update:value', tempValue.value[0]);

      _emits('confirm', tempValue.value[0]);
    }
  };
</script>
