<template>
  <view
    :class="[clz.root(), className, `bg-${bg}`]"
    class="fixed z-index-layout abs-top"
    :style="{
      paddingTop: `${statusBarHeight}px`,
    }"
  >
    <view :class="[clz.body(), `color-${color}`]" class="height-cell-default flex plr-l">
      <!--左侧-->
      <view
        :class="[clz.left(), { 'flex-glow': !showTitle }]"
        class="span-6 flex-inline flex-shrink"
      >
        <view v-if="autoHomeOrLeftIcon && showHome" @click="handleClickHome">
          <sl-icon name="icon_back_home" :color="iconColor" :size="iconSize" :iconLib="iconLib" />
        </view>
        <view v-if="autoHomeOrLeftIcon && showGoBack" @click="handleClickBack">
          <sl-icon name="icon_arrow_left" :color="iconColor" :size="iconSize" :iconLib="iconLib" />
        </view>
        <slot name="left" />
      </view>
      <!--中间标签-->
      <view
        v-if="showTitle"
        :class="[clz.center()]"
        class="flex-shrink flex-center span-12"
        @click="$emit('onClickTitle')"
      >
        <slot>
          <text class="text-ellipsis bold font-xt">{{ title }}</text>
        </slot>
      </view>
      <!--右侧-->
      <view :class="clz.right()" class="span-6 flex-shrink flex-right">
        <slot name="right" />
      </view>
    </view>
  </view>
  <sl-fill-line size="cell-default" />
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { props } from './_props';
  import { useNavBar } from './useNavBar';

  const ComponentName = 'sl-nav-bar';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);
  defineEmits(['onClickTitle']);

  const { showHome, showGoBack, statusBarHeight, handleClickBack, handleClickHome } =
    useNavBar(_props);
</script>
