<template>
  <scroll-view
    :class="[clz.root(), className]"
    scroll-x
    :scrollLeft="scrollLeft"
    scroll-with-animation
    class="w100 border-box"
  >
    <view :id="id" :class="[clz.body()]" class="flex relative pb-s">
      <view
        v-for="(item, inx) in list"
        :key="'tab-item' + inx"
        :class="[
          clz.join('body', 'item'),
          isScroll ? 'flex-grow' : 'mr-l',
          { 'border-right border-line-light': isScroll && inx < list.length - 1 },
        ]"
        class="flex-shrink relative flex-column mr-d"
        @click="handleTab(inx)"
      >
        <view :class="[clz.join('body', 'item', 'text')]" class="text-ellipsis">
          {{ item.name }}
        </view>
      </view>
      <view :style="tabBarCssObj" :class="[]" class="absolute bg-primary"></view>
    </view>
  </scroll-view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';

  import { getCurrentInstance } from 'vue';
  import { props } from './_props';
  import { useTabs } from './useTabs';

  const ComponentName = 'sl-tabs';
  const clz = useClassName(ComponentName);

  defineProps(props);
  const _emits = defineEmits(['change']);

  const instance = getCurrentInstance();

  const { id, scrollLeft, tabBarCssObj, handleTab } = useTabs(instance, _emits, clz);
</script>
