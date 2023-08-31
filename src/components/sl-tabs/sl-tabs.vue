<template>
  <scroll-view
    :class="[clz.root(), className]"
    scroll-x
    :scrollLeft="scrollLeft"
    scroll-with-animation
    :show-scrollbar="false"
    :enhanced="true"
    class="w100 border-box"
  >
    <view :id="id" :class="[clz.body()]" class="flex relative pb-s">
      <view
        v-for="(item, inx) in list"
        :key="'tab-item' + inx"
        :class="[
          clz.join('body', 'item'),
          !scroll ? 'flex-grow' : 'mr-l',
          { 'border-right border-line-light': showDivider && scroll && inx < list.length - 1 },
        ]"
        class="flex-shrink relative flex-center"
        @click="handleTab(inx)"
      >
        <view :class="[clz.join('body', 'item', 'text')]" class="text-ellipsis">
          {{ item.name }}
        </view>
        <template v-if="item.count">
          <slot name="count" :count="item.count">
            <view
              class="radius-round bg-error color-white font-desc flex-shrink rect-28 flex-center"
            >
              {{ item.count }}
            </view>
          </slot>
        </template>
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

  const _props = defineProps(props);
  const _emits = defineEmits(['change', 'update:current']);

  const instance = getCurrentInstance();

  const { id, scrollLeft, tabBarCssObj, handleTab } = useTabs(instance, _props, _emits, clz);
</script>
