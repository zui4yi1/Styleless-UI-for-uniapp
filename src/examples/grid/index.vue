<template>
  <s-page title="sl-row/sl-col" className="plr-l">
    <Brief
      desc="栅格组件, 通过sl-row/sl-col组件来实现grid. (注: 由于css grid本身的兼容性问题, 本组件是通过float来实现的, 为确保布局不会乱, 使用时需设置具体的高度)"
    />
    <Tip title="四列应用列表">
      <view>sl-row: height=160, radius=default</view>
      <view>sl-col: bg=$theme, bodyClz='p-all-d color-white'</view>
    </Tip>
    <sl-row :height="160" radius="default" className="mt-d">
      <sl-col v-for="color in themes" :key="color" :bg="color" bodyClz="p-all-d color-white">
        {{ color }}
      </sl-col>
    </sl-row>
  </s-page>
</template>
<script setup lang="ts">
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error', 'pink', 'purple'];
</script>
