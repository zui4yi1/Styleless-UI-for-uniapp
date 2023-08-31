<template>
  <s-page title="sl-image" className="plr-l">
    <Brief desc="图片组件, 需设定具体的高宽，即使用时务必带高和宽属性，或者其容器有高宽属性" />
    <Tip title="容器的高宽200" />
    <view class="rect-200 mt-d">
      <sl-image
        src="https://img0.baidu.com/it/u=3021883569,1259262591&fm=253&fmt=auto&app=120&f=JPEG?w=1140&h=641"
      />
    </view>
    <Tip title="圆角" desc="radius=round" />
    <sl-image
      className="mt-d"
      src="https://img0.baidu.com/it/u=3021883569,1259262591&fm=253&fmt=auto&app=120&f=JPEG?w=1140&h=641"
      width="200rpx"
      height="200rpx"
      radius="round"
    />
    <Tip
      title="加载失败"
      desc="默认加载失败的图标是icon_image_fail, 加载中是icon_loading, 当然也可使用插糟slot自定义"
    />
    <sl-image
      className="mt-d"
      src="https://2img0.baidu.com/it/u=3021883569,1259262591&fm=253&fmt=auto&app=120&f=JPEG?w=1140&h=641"
      width="200rpx"
      height="200rpx"
      radius="round"
    />
    <Tip title="点击可全屏预览" desc="preview=true" />
    <view class="rect-200 mt-d">
      <sl-image
        preview
        src="https://img0.baidu.com/it/u=3021883569,1259262591&fm=253&fmt=auto&app=120&f=JPEG?w=1140&h=641"
      />
    </view>
  </s-page>
</template>
<script setup lang="ts">
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];
</script>
\
