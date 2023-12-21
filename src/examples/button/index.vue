<template>
  <s-page title="sl-button" className="plr-l">
    <Brief desc="按钮分三类 type=text | plain | theme, 默认theme, 传bg或color即可" />

    <Tip title="主色按钮" desc="type=theme(默认), 传bg改背景. bg=primary | success | error" />
    <sl-button v-for="theme in themes" :bg="theme" :key="theme" className="mt-d">
      {{ theme }}
    </sl-button>

    <Tip title="文字按钮" desc="type=text, color= primary | success | error" className="mt-d" />
    <sl-button type="text" :color="theme" :key="theme" className="mt-d" v-for="theme in themes">
      {{ theme }}
    </sl-button>

    <Tip title="plain按钮" desc="type=plain color=primary | success | error" className="mt-d" />
    <sl-button type="plain" :color="theme" :key="theme" className="mt-d" v-for="theme in themes">
      {{ theme }}
    </sl-button>

    <Tip title="带图标" desc="icon={name: 'icon_check', color: 'white'}" className="mt-d" />
    <sl-button :icon="{ name: 'icon_check', color: 'white' }" className="mt-d">确定</sl-button>
    <Tip
      title="带图标loading"
      desc="icon={name: 'icon_loading', color: 'white', className: 'spin'}"
      className="mt-d"
    />
    <sl-button
      :icon="{ name: 'icon_loading', color: 'white', className: 'mr-xs spin' }"
      className="mt-d"
    >
      加载中
    </sl-button>
    <Tip
      title="禁用, 任意风格均可"
      desc="disabled=true. (注: 采用透明度虚化的方式实现)"
      className="mt-d"
    />
    <sl-button v-for="theme in themes" disabled :bg="theme" :key="theme" className="mt-d">
      {{ theme }}
    </sl-button>

    <Tip
      title="尺寸"
      desc="高度须遵行样式语义化的规则, 由通过size=button-default | button-small等配置实现. 而宽度则会自动充满父容器, 或设定固定的值也可实现, width=120px(默认auto)"
      className="mt-d"
    />
    <sl-button size="button-small" className="mt-d">确定</sl-button>
    <sl-button size="button-small" width="120rpx" className="mt-d">确定</sl-button>
  </s-page>
</template>
<script setup lang="ts">
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';
  const themes = ['primary', 'success', 'error', 'warning', 'pink', 'blue'];
</script>
