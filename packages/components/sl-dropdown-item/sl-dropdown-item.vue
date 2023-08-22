<template>
  <view
    :class="[clz.root(), className, isScroll ? 'flex-grow' : 'ml-l']"
    class="flex-shrink relative flex-center"
    @click="handleDropdown(selfIndex)"
  >
    <view :style="{ maxWidth: maxWidth }" class="flex-center scroll-hidden">
      <template v-if="type === 'select'">
        <view class="text-ellipsis">{{ title }}</view>
        <sl-icon name="icon_arrow_up" v-if="selfIndex === activeInx" />
        <sl-icon v-else name="icon_arrow_down" />
      </template>
      <template v-else-if="type === 'text'">
        <view class="text-ellipsis" :class="[{ 'color-primary': isActive }]">{{ title }}</view>
      </template>
      <template v-else-if="type === 'sort'">
        <view class="text-ellipsis" :class="[{ 'color-primary': isActive }]">
          {{ title }}
        </view>
        <view class="flex-column-center">
          <sl-icon name="icon_sort_up" :color="sortCount === 1 ? 'primary' : 'content'" />
          <sl-icon name="icon_sort_down" :color="sortCount === 2 ? 'primary' : 'content'" />
        </view>
      </template>
      <template v-else-if="type === 'custom'">
        <view class="text-ellipsis">
          <slot name="custom_time" :isActive="isActive" />
        </view>
      </template>
    </view>
  </view>
  <!-- 弹出层, 如打开select -->
  <template v-if="type === 'select' || isMask">
    <view
      :class="[clz.join('foot', 'mask-top'), isActive ? 'z-index-mask' : 'z-index-hide']"
      class="fixed bg-transparent abs-top"
      :style="{ bottom: topPos + 'px' }"
      hover-stop-propagation
      @touchmove.stop.prevent="() => {}"
      @click="handleDropdown(-1)"
    ></view>
    <view
      :class="[clz.join('foot', 'mask-bottom'), isActive ? 'z-index-mask' : 'z-index-hide']"
      class="fixed mask-default transition-fast abs-bottom"
      :style="{ top: topPos - 2 + 'px', opacity: isActive ? 1 : 0 }"
      hover-stop-propagation
      @touchmove.stop.prevent="() => {}"
      @click="handleDropdown(-1)"
    >
      <view class="bg-white scroll plr-l ptb-d" @click.stop="" :style="{ maxHeight: '30%' }">
        <template v-if="type === 'select'">
          <view v-for="(item, inx) in list" :key="'item_' + inx" @click="handleSelect(item.value)">
            <view class="flex height-button-small">
              <view class="flex-grow">
                {{ item.label }}
              </view>
              <view class="span-3 flex-shrink flex-right">
                <sl-icon v-if="values.includes(item.value)" color="primary" name="icon_check" />
              </view>
            </view>
            <sl-line v-if="inx <= list.length - 2" />
          </view>
        </template>
        <slot v-else name="custom" />
      </view>
    </view>
  </template>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { computed, inject, onBeforeMount, ref, watchEffect } from 'vue';
  import { props } from './_props';

  const ComponentName = 'sl-dropdown-item';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);
  const _emits = defineEmits(['update:value', 'select']);

  const sortCount = ref(0);

  const { isScroll, dropdownItems, activeInx, topPos, addItem, updateActiveInx, onChange } = inject(
    'dropdownParent',
    {
      isScroll: false,
      dropdownItems: [],
      activeInx: -1,
      topPos: 0,
    } as any,
  );
  const selfIndex = computed(() => {
    return dropdownItems.value.findIndex((t: any) => t === _props.title);
  });

  const isActive = computed(() => {
    return selfIndex.value === activeInx.value;
  });

  const values = computed(() => {
    return _props.value instanceof Array ? [..._props.value] : [_props.value];
  });

  onBeforeMount(() => {
    addItem(_props.title);
  });

  watchEffect(() => {
    if (_props.type === 'sort' && !isActive.value) {
      sortCount.value = 0;
    }
  });

  const handleDropdown = (val: number) => {
    if (_props.type === 'sort') {
      sortCount.value = sortCount.value === 2 ? 0 : sortCount.value + 1;
      onChange(selfIndex.value, sortCount.value);
      if (sortCount.value === 0) {
        updateActiveInx(-1);
        return;
      }
    } else if (_props.type !== 'select') {
      onChange(selfIndex.value, null);
    }
    updateActiveInx(val);
  };
  const handleSelect = (val: any) => {
    if (!_props.mutilple) {
      _emits('select', val);
      _emits('update:value', val);
      updateActiveInx(-1);
      onChange(selfIndex.value, val);
    } else {
      const _vals = [...values.value];
      const inx = _vals.findIndex((v) => v === val);
      if (inx === -1) {
        _vals.push(val);
      } else {
        _vals.splice(inx, 1);
      }
      _emits('select', _vals);
      _emits('update:value', _vals);
      onChange(selfIndex.value, _vals);
    }
  };
</script>
