<template>
  <view
    :class="[clz.root(), className, scroll ? 'flex-grow' : 'mr-l']"
    class="flex-shrink relative flex-center"
    @click="handleDropdown(selfIndex)"
  >
    <!--标题-->
    <view :style="{ maxWidth: maxWidth }" class="flex-center scroll-hidden">
      <template v-if="type === 'select'">
        <view class="scroll-hidden">
          <template v-if="labels.length">
            <view class="text-ellipsis color-primary">
              <slot name="customSelect" :labels="labels">
                {{ labels.join(',') }}
              </slot>
            </view>
          </template>
          <template v-else>
            <view>{{ title }}</view>
          </template>
        </view>
        <sl-icon
          :name="selfIndex === activeInx ? 'icon_arrow_up' : 'icon_arrow_down'"
          :color="labels.length ? 'primary' : 'placeholder'"
          :size="32"
        />
      </template>
      <template v-else-if="type === 'cascade'">
        <view class="scroll-hidden">
          <template v-if="pickerLabels.length">
            <view class="text-ellipsis color-primary">
              <slot name="customCascade" :labels="pickerLabels">
                {{ pickerLabels }}
              </slot>
            </view>
          </template>
          <template v-else>
            <view>{{ title }}</view>
          </template>
        </view>
        <sl-icon
          :name="selfIndex === activeInx ? 'icon_arrow_up' : 'icon_arrow_down'"
          :color="pickerLabels.length ? 'primary' : 'placeholder'"
          :size="32"
        />
      </template>
      <template v-else-if="type === 'text'">
        <view class="text-ellipsis" :class="[{ 'color-primary': isActive }]">{{ title }}</view>
      </template>
      <template v-else-if="type === 'date'">
        <view class="scroll-hidden">
          <template v-if="dateText.length">
            <view class="text-ellipsis color-primary">
              {{ dateText }}
            </view>
          </template>
          <template v-else>
            <view>{{ title }}</view>
          </template>
        </view>
        <sl-icon
          :name="selfIndex === activeInx ? 'icon_arrow_up' : 'icon_arrow_down'"
          :color="dateText.length ? 'primary' : 'placeholder'"
          :size="32"
        />
      </template>
      <template v-else-if="type === 'sort'">
        <view class="text-ellipsis" :class="[{ 'color-primary': isActive }]">
          {{ title }}
        </view>
        <view class="flex-column-center">
          <sl-icon name="icon_sort_up" :color="sortCount === 1 ? 'primary' : 'placeholder'" />
          <sl-icon name="icon_sort_down" :color="sortCount === 2 ? 'primary' : 'placeholder'" />
        </view>
      </template>
      <template v-else-if="type === 'custom'">
        <view class="text-ellipsis">
          <slot name="custom_item" :isActive="isActive" />
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
      <view
        class="bg-white scroll plr-l ptb-d"
        @click.stop=""
        :style="{ maxHeight: '30%', marginTop: '-2px' }"
      >
        <template v-if="type === 'select'">
          <view v-for="(item, inx) in list" :key="'item_' + inx" @click="handleSelect(item.value)">
            <view class="flex height-button-small">
              <view class="flex-grow">
                {{ item.label }}
              </view>
              <view class="span-3 flex-shrink flex-right">
                <sl-icon
                  v-if="values.includes(item.value)"
                  color="primary"
                  name="icon_check"
                  :size="40"
                />
              </view>
            </view>
            <sl-line v-if="inx <= list.length - 2" />
          </view>
        </template>
        <slot v-else name="custom" />
      </view>
    </view>
  </template>
  <!--日期-->
  <sl-date-picker
    v-if="type === 'date'"
    title="请选择日期"
    v-model:open="isPopupOpen"
    v-model:value="dateText"
    @close="handleClosePopup"
    v-bind="comOps"
  />

  <sl-picker
    v-if="type === 'cascade'"
    ref="pickreRef"
    :hasAll="hasAll"
    :title="`请选择${title}`"
    v-model:open="isPopupOpen"
    v-model:value="pickerValues"
    :list="list"
    v-bind="comOps"
    @close="handleClosePopup"
    @change="handleConfirm"
  />
  <sl-picker />
</template>
<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-dropdown-item';
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
  import { computed, inject, onBeforeMount, ref, watchEffect } from 'vue';
  import { props } from './_props';

  const _props = defineProps(props);
  const _emits = defineEmits(['update:value', 'select']);

  // 排序类计数
  const sortCount = ref(0);

  // 日期类文本
  const dateText = ref('');
  const isPopupOpen = ref(false);

  const pickreRef = ref(null as any);

  const { scroll, dropdownItems, activeInx, topPos, addItem, updateActiveInx, onChange } = inject(
    'dropdownParent',
    {
      scroll: false,
      dropdownItems: [],
      activeInx: -1,
      topPos: 0,
    } as any,
  );
  const selfIndex = computed(() => {
    return dropdownItems.value.findIndex((t: any) => t === _props.title);
  });

  const isActive = computed(() => {
    return activeInx.value === -1 ? false : selfIndex.value === activeInx.value;
  });

  const values = computed(() => {
    return _props.value instanceof Array ? [..._props.value] : [_props.value];
  });
  const labels = computed(() => {
    return _props.list.filter((t) => values.value.includes(t.value)).map((t) => t.label);
  });
  const pickerLabels = ref('');
  const pickerValues = computed<any[]>(() => {
    return _props.value instanceof Array ? (_props.value.length ? [..._props.value] : []) : [];
  });

  onBeforeMount(() => {
    addItem(_props.title);
  });

  watchEffect(() => {
    if (_props.type === 'sort' && !isActive.value) {
      sortCount.value = 0;
    }
  });

  const handleDropdown = (inx: number) => {
    if (_props.type === 'sort') {
      sortCount.value = sortCount.value === 2 ? 0 : sortCount.value + 1;
      onChange(selfIndex.value, sortCount.value);
      if (sortCount.value === 0) {
        updateActiveInx(-1);
        return;
      }
    } else if (['date', 'cascade'].includes(_props.type)) {
      isPopupOpen.value = true;
    } else if (_props.type === 'text') {
      // 主要是文本类
      onChange(selfIndex.value, null);
    }
    // TODO: 自定义类的还未实现
    updateActiveInx(inx);
  };

  /** select类型 */
  const handleSelect = (val: any) => {
    if (!_props.mutilple) {
      updateActiveInx(-1);
      if (_props.value && _props.value === val) {
        // 取消
        _emits('select', '');
        _emits('update:value', '');
        // updateActiveInx(-1);
        onChange(selfIndex.value, '');
      } else {
        _emits('select', val);
        _emits('update:value', val);
        onChange(selfIndex.value, val);
      }
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

  const handleConfirm = (vals: string[]) => {
    pickerLabels.value = pickreRef.value?.getLabels().join(',') || '';
    _emits('update:value', vals);
    onChange(selfIndex.value, vals);
    isPopupOpen.value = false;
  };

  const handleClosePopup = () => {
    updateActiveInx(-1);
  };
</script>
