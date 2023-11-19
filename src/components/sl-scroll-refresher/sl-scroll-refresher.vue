<template>
  <view class="top_area">
    <slot name="top_area" />
  </view>
  <scroll-view
    :class="[clz.root(), className]"
    class="scroll-transparent"
    :style="{ height: bodyHeight, minHeight: bodyHeight }"
    scroll-y
    :show-scrollbar="false"
    enhanced
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
        <text class="font-content color-secondary ml-xs font-secondary">下拉刷新</text>
      </view>
      <view v-if="showRefreshTip" class="flex-center ptb-s">
        <slot name="load_icon">
          <sl-icon name="icon_loading" className="spin" />
        </slot>
        <text class="font-content color-secondary ml-xs font-secondary">释放立即刷新</text>
      </view>
      <view v-if="isSucc" class="flex-center height-cell-default">
        <sl-icon name="icon_check" color="secondary" size="36" />
        <text class="color-secondary ml-s">刷新成功</text>
      </view>
      <view v-if="showList" class="plr-l">
        <slot></slot>
      </view>
      <view v-if="showErrorTip && !refresherTriggered">
        <view class="text-center color-placeholder">{{ showErrorTip }}</view>
      </view>
      <view v-if="isShowNoMoreTip">
        <view class="text-center color-placeholder font-secondary">--没有更多了--</view>
      </view>
      <sl-fill-line isBottom />
    </view>
  </scroll-view>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-scroll-refresher';
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
  import { getCurrentInstance } from 'vue';
  import { props } from './_props';
  import { useScrollRefresher } from './useScrollRefresher';

  const _props = defineProps(props);

  const instance = getCurrentInstance();

  const {
    bodyHeight,
    refresherTriggered,
    showPullTip,
    showRefreshTip,
    showErrorTip,
    isShowNoMoreTip,
    showList,
    isSucc,
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
