<template>
  <s-page title="Styleless UI" className="plr-l">
    <view class="bold ptb-xs font-title">简介</view>
    <view class="color-placeholder font-secondary">
      <view>
        styleless, 顾名思义, 就是指这款UI库, 她没有自己的样式, 一点点都没有! 但导入后,
        她就会自动追随你的工程, 你的工程长啥样, 她就长啥样.
      </view>
      <view class="mt-s">你若想要"定制UI库", 她也能轻易实现.</view>
    </view>
    <view class="bold ptb-xs mt-d font-title" @click="handleJump('/examples/quick-start/index')">
      快速上手
    </view>
    <view class="bold ptb-xs mt-d font-title">组件列表</view>
    <view class="color-placeholder font-secondary">
      组件暂时这么多, 都是基础常用的, 其它陆续补上
    </view>

    <template v-for="cata in pages" :key="cata.type">
      <Tip :title="cata.title" />
      <view v-for="(item, inx) in cata.list" :key="'item_' + inx">
        <view @click="handleJump(item.url)" class="h-64 flex">
          <view>{{ item.componentName }}</view>
          <view class="ml-d color-placeholder font-secondary">{{ item.componentDesc }}</view>
        </view>
      </view>
    </template>
  </s-page>
</template>
<script setup lang="ts">
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  import pages from './pages';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];

  const handleJump = (url: string) => {
    uni.navigateTo({
      url,
    });
  };
</script>
