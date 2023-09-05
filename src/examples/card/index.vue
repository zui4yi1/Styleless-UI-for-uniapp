<template>
  <s-page title="sl-card" className="plr-l">
    <Brief
      desc="可自由定义，操作又简单的的card容器. 可任意调整卡片的背景、边框、内间距、圆角、阴影等, 而无须写样式覆盖。"
    />
    <Tip
      title="默认"
      desc="bg=white, radius=default, hasShadow=true, paddingClz='plr-l ptb-d', borderClz='border border-line-default'"
    />
    <sl-card className="mt-d">
      <view>卡片卡片</view>
      <view>卡片卡片。。。</view>
    </sl-card>
    <Tip title="换内间距" desc="paddingClz='plr-xl ptb-xs'" className="mt-d" />
    <sl-card paddingClz="plr-xl ptb-xs" className="mt-d">
      <view>卡片卡片</view>
      <view>卡片卡片。。。</view>
    </sl-card>
    <Tip title="蓝边框" desc="borderClz='border border-primary'" className="mt-d" />
    <sl-card borderClz="border border-primary" className="mt-d">
      <view>卡片卡片</view>
      <view>卡片卡片。。。</view>
    </sl-card>
    <Tip
      title="无边框"
      desc="borderClz='border-none'. 一般是页面带有色背景, 去边框就可以了"
      className="mt-d"
    />
    <view class="bg-fill-default plr-l ptb-xl mt-d" style="height: 200rpx">
      <sl-card borderClz="border-none">
        <view>卡片卡片</view>
        <view>卡片卡片。。。</view>
      </sl-card>
    </view>

    <Tip title="换背景" desc="bg=fill-light, borderClz='border-none'" className="mt-d" />
    <sl-card borderClz="border-none" bg="fill-default" className="mt-d">
      <view>卡片卡片</view>
      <view>卡片卡片。。。</view>
    </sl-card>
  </s-page>
</template>
<script setup lang="ts">
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];
</script>
