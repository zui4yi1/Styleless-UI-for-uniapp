<template>
  <s-page title="sl-input" className="plr-l">
    <Brief
      desc="通用输入框组件. 除了尺寸和字体外, 还提供了 borderClz, radius, bg, color等属性, 从而可以定制任意风格的输入框"
    />

    <Tip
      title="默认"
      desc="默认带下边框、无圆角. borderClz='border-bottom border-line-default'(默认), 及无圆角radius=none(默认)"
      className="mt-d"
    />
    <sl-input v-model:value="inputVal" />

    <Tip
      title="灰色背景风格"
      desc="背景bg=fill-default, 圆角radius=default, 去边框borderClz='border-none'"
      className="mt-d"
    />
    <sl-input
      v-model:value="inputVal"
      radius="default"
      bg="fill-default"
      borderClz="border-none"
      className="mt-d"
    />

    <Tip title="四周边框风格" desc="borderClz=border" className="mt-d" />
    <sl-input v-model:value="inputVal" borderClz="border" className="mt-d" />

    <Tip
      title="四周边框风格, 蓝边、带圆角"
      desc="borderClz='border border-primary',radius=default "
      className="mt-d"
    />
    <sl-input
      v-model:value="inputVal"
      borderClz="border border-primary"
      radius="default"
      className="mt-d"
    />
    <Tip title="修改padding" desc="paddingClz='' (默认是plr-d)" className="mt-d" />
    <sl-input v-model:value="inputVal" paddingClz="" className="mt-d" />

    <Tip title="密码" desc="type=password" className="mt-d" />
    <sl-input v-model:value="inputVal" paddingClz="" type="password" className="mt-d" />

    <Tip
      title="一些特殊场景, 如灰色背景"
      desc="去边框+加圆角即可: borderClz=border-none, radius=default"
      className="mt-d"
    />
    <view class="bg-fill-default p-all-xl mt-d">
      <sl-input v-model:value="inputVal" borderClz="border-none" radius="default" />
    </view>
  </s-page>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];

  const inputVal = ref('');
</script>
