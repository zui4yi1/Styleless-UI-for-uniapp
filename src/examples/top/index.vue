<template>
  <s-page title="sl-top/sl-bottom" className="plr-l">
    <sl-top>
      <view class="bg-success color-white h-88 plr-l flex">
        通知、查询、profile等场景常需要置顶。。。
      </view>
    </sl-top>
    <Brief desc="置顶与置顶组件。移动端有很多需要置顶或置底的布局，故抽出来作为组件使用" />
    <Tip title="置顶 sl-top" desc="查看页面顶部的提示。注意:sl-top要位于sl-page组件内" />
    <Tip
      title="置底 sl-bottom"
      desc="查看页面底部的按钮。注意：sl-bottom只能在页面中使用, 而不可放在组件内"
    />
  </s-page>

  <sl-bottom>
    <sl-button>置底最多的场景就是按钮。。。</sl-button>
  </sl-bottom>
</template>
<script setup lang="ts">
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];
</script>
