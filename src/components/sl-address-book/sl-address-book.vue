<template>
  <view
    :class="[clz.root(), className]"
    class="relative flex"
    :style="{ height: height || `${calcHeight}px` }"
  >
    <!--列表-->
    <scroll-view
      :class="[clz.body()]"
      class="h100 flex-grow scroll-transparent"
      scroll-y
      scroll-with-animation
      :scroll-into-view="catalogId"
      :show-scrollbar="false"
      :enhanced="true"
      @scroll="handleScroll"
    >
      <view
        v-for="cata in list"
        :key="'index_item_' + cata.firstLetter"
        :class="[clz.join('body', 'catalog')]"
      >
        <view
          :id="clz.join('body', 'catalog', 'head') + '_' + cata.firstLetter"
          :class="[clz.join('body', 'catalog', 'head')]"
          class="bold bg-fill-light"
        >
          <slot name="index_item_header" :letter="cata.firstLetter">
            <view :class="[headClz]">
              {{ cata.firstLetter }}
            </view>
          </slot>
        </view>
        <view :class="[clz.join('body', 'catalog', 'item')]">
          <template v-for="(item, inx) in cata.list" :key="`${cata.firstLetter}_${inx}`">
            <slot name="index_item" :item="item" />
          </template>
        </view>
      </view>
    </scroll-view>
    <!--索引条-->
    <view
      :class="[clz.right()]"
      class="flex-shrink flex-column-center pt-xl"
      :style="{ height: height ? `calc(${height} - 80px)` : `${calcHeight - 80}px` }"
    >
      <scroll-view
        scroll-y
        :scroll-into-view="letterId"
        :show-scrollbar="false"
        :enhanced="true"
        class="h100 scroll-transparent delay-show"
      >
        <view
          v-for="cata in list"
          :key="'index_' + cata.firstLetter"
          :id="'index_' + cata.firstLetter"
          class="rect-32 flex-center radius-round mb-xxs"
          :class="[
            'index_' + cata.firstLetter,
            activeLetter === cata.firstLetter
              ? 'color-white bg-primary radius-round'
              : 'color-primary',
          ]"
          :data-letter="cata.firstLetter"
          @click="handleLetter"
        >
          <text class="font-desc">
            {{ cata.firstLetter }}
          </text>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-address-book';
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
  import { getCurrentInstance, onMounted, ref } from 'vue';
  import { getDom, getDoms } from '../../utils/dom';
  import { props } from './_props';

  const _props = defineProps(props);

  const instance = getCurrentInstance();

  /** 若props的height无值, 则取计算的值 */
  const calcHeight = ref(0);
  const catalogDoms = ref([] as any[]);

  const activeLetter = ref('');
  const catalogId = ref('');
  const letterId = ref('');

  let isAnimation = false;
  let aniamtionHandle = null as any;

  const triggerAnimation = () => {
    isAnimation = true;
    clearTimeout(aniamtionHandle);
    aniamtionHandle = setTimeout(() => {
      isAnimation = false;
    }, 600);
  };

  const handleLetter = (e: Event) => {
    const target = e.currentTarget as any;
    activeLetter.value = target.dataset.letter;
    catalogId.value = clz.join('body', 'catalog', 'head') + '_' + activeLetter.value;
    triggerAnimation();
  };

  const handleScroll = (e: any) => {
    if (isAnimation) return;

    const scrollTop = e.detail.scrollTop;
    const activeIndex = catalogDoms.value.findIndex((dom) => {
      return scrollTop <= dom.top + dom.height;
    });
    if (activeIndex > -1) {
      activeLetter.value = _props.list[activeIndex].firstLetter;
      letterId.value = `index_${activeLetter.value}`;
    }
  };

  onMounted(async () => {
    const dom = await getDom(instance, '.' + ComponentName);
    const sysInfo = uni.getSystemInfoSync();
    calcHeight.value = sysInfo.windowHeight - (dom.top || 0) - 2;

    const doms = await getDoms(instance, '.' + clz.join('body', 'catalog'));
    const firstDomTop = doms[0]?.top || 0;
    catalogDoms.value = doms.map((dom) => {
      const { top = 0, height = 0 } = dom;
      return {
        top: top - firstDomTop,
        height,
      };
    });
  });
</script>
