<template>
  <sl-popup v-model:open="isOpen" :title="title" @confirm="handleConfirm">
    <view :class="[clz.root(), className]">
      <scroll-view
        :class="[clz.body()]"
        class="border-box w100"
        scroll-y
        :style="{ maxHeight: '500rpx' }"
      >
        <view class="plr-l">
          <template v-for="(item, inx) in list" :key="clz.join('body', 'item', inx)">
            <view class="flex-between height-cell-default" @click="handleSelect(item)">
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
            <sl-line v-if="inx < list.length - 1" />
          </template>
        </view>
      </scroll-view>
    </view>
  </sl-popup>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-select';
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
  import { computed, ref, toRaw, watchEffect } from 'vue';
  import { props, type ICompSelect } from './_props';

  const _props = defineProps(props);
  const _emits = defineEmits(['update:open', 'update:value', 'change']);

  const tempValue = ref([] as any[]);

  const isOpen = computed({
    get() {
      return _props.open;
    },
    set(value) {
      _emits('update:open', value);
    },
  });

  const handleSelect = (item: ICompSelect) => {
    if (item.disabled) return;

    if (_props.multiple) {
      let inx = tempValue.value.findIndex((t) => t === item.value);
      if (inx === -1) tempValue.value.push(item.value);
      else tempValue.value.splice(inx, 1);
    } else {
      tempValue.value = [item.value];
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
      _emits('change', vals);
    } else {
      _emits('update:value', tempValue.value[0]);

      _emits('change', tempValue.value[0]);
    }
  };
</script>
