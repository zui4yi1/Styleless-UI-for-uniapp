<template>
  <s-page title="Styleless UI" className="plr-l">
    <template v-for="cata in pages" :key="cata.type">
      <Tip :title="cata.title" />
      <view v-for="(item, inx) in cata.list" :key="'item_' + inx">
        <view @click="handleJump(item.url)" class="h-64">
          {{ item.componentName }}
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
