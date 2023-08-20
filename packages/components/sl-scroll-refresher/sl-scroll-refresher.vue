<template>
  <view class="top_area">
    <slot name="top_area" />
  </view>
  <scroll-view
    :class="[clz.root(), className]"
    class=""
    :style="{ height: bodyHeight, minHeight: bodyHeight }"
    scroll-y
    :refresherEnabled="refresherEnabled"
    :refresherThreshold="threshold"
    refresherDefaultStyle="none"
    :refresherTriggered="refresherTriggered"
    @scrolltolower="fetchMoreData"
    @refresherrefresh="refreshData"
    @refresherpulling="handlePull"
    @refresherabort="hanleRefresherabort"
  >
    <view :class="[clz.body()]" :style="{ minHeight: '81px' }">
      <view class="flex-center ptb-s" v-if="showPullTip && !showRefreshTip">
        <slot name="load_icon">
          <sl-icon name="icon_loading" className="spin" />
        </slot>
        <text class="font-content color-secondary ml-xs">下拉刷新...</text>
      </view>
      <view v-if="showRefreshTip" class="flex-center ptb-s">
        <slot name="load_icon">
          <sl-icon name="icon_loading" className="spin" />
        </slot>
        <text class="font-content color-secondary ml-xs">释放立即刷新...</text>
      </view>
      <view v-if="refresherTriggered" class="flex-center height-cell-default bg-primary">
        <sl-icon name="icon_check" />
        <text class="color-white ml-xs">刷新成功</text>
      </view>
      <view v-if="showList">
        <slot></slot>
      </view>
      <view v-if="showAppendTip">
        <slot name="load_icon">
          <sl-icon name="icon_loading" className="spin" />
        </slot>
        <text class="font-content color-secondary ml-xs">更多数据加载中...</text>
      </view>
      <view v-if="showErrorTip && !refresherTriggered">
        <view class="text-center color-placeholder">{{ showErrorTip }}</view>
      </view>
      <view v-if="isShowNoMoreTip">
        <view class="text-center color-placeholder">没有更多了~</view>
      </view>
      <sl-fill-line isBottom />
    </view>
  </scroll-view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { getCurrentInstance } from 'vue';
  import { props } from './_props';
  import { useScrollRefresher } from './useScrollRefresher';

  const ComponentName = 'sl-scroll-refresher';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);
  // defineEmits(['click']);

  const instance = getCurrentInstance();

  const {
    bodyHeight,
    refresherTriggered,
    showPullTip,
    showRefreshTip,
    showAppendTip,
    showErrorTip,
    isShowNoMoreTip,
    showList,
    initPager,
    // fetchData,
    refreshData,
    fetchMoreData,
    handlePull,
    hanleRefresherabort,
    resetData,
  } = useScrollRefresher(_props, instance);

  defineExpose({ resetData, initPager });
</script>
