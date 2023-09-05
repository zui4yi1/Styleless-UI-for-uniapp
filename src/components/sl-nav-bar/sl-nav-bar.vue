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
        <sl-icon
          v-if="autoHomeOrLeftIcon && showHome"
          name="icon_back_home"
          :color="iconColor"
          :size="iconSize"
          :iconLib="iconLib"
          @click="handleClickHome"
        />

        <sl-icon
          v-if="autoHomeOrLeftIcon && showGoBack"
          name="icon_arrow_left"
          :color="iconColor"
          :size="iconSize"
          :iconLib="iconLib"
          @click="handleClickBack"
        />
        <slot name="left" />
      </view>
      <!--中间标题-->
      <view
        v-if="showTitle"
        :class="[clz.center()]"
        class="flex-shrink flex-center span-12"
        @click="$emit('onClickTitle')"
      >
        <slot>
          <view class="text-ellipsis bold font-xt">{{ title }}</view>
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
  import { useClassName } from '../../hooks/use-class-name';
  import { props } from './_props';
  import { useNavBar } from './useNavBar';

  const ComponentName = 'sl-nav-bar';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);
  defineEmits(['onClickTitle']);

  const { showHome, showGoBack, statusBarHeight, handleClickBack, handleClickHome } =
    useNavBar(_props);
</script>
