<template>
  <s-page title="sl-button" className="plr-l">
    <Brief
      desc="一款严格遵行‘样式组件化’规范开发的按钮组件. 本组件没有自带任何样式, 却可生成任意风格的按钮. 样式语义化是本组件的(也是样式组件化的)最大的特色. 如bg=primary|success|error, color=white|content即可生成对应风格的按钮, 而无须传实际的颜色数值."
    />
    <Tip title="常用主色" desc="bg=primary | success | error, color=white(默认)" />
    <sl-button v-for="theme in themes" :bg="theme" :key="theme" className="mt-d">
      {{ theme }}
    </sl-button>
    <Tip
      className="mt-d"
      title="plain风格, 白底蓝字蓝边"
      desc="color=primary, bg=white, bodyClazz='border border-primary border-thick'"
    />
    <sl-button
      className="mt-d"
      color="primary"
      bg="white"
      bodyClazz="border border-primary border-thick"
      hover-class="bg-disabled"
    >
      plain
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
    <sl-button
      color="primary"
      bg="white"
      bodyClazz="border border-primary border-thick"
      hover-class="bg-disabled"
      className="mt-d"
      disabled
    >
      plain
    </sl-button>
    <Tip
      title="尺寸"
      desc="高度须遵行样式语义化的规则, 由通过size=button-default | button-small等配置实现. 而宽度则会自动充满父容器, 或设定固定的值也可实现, width=120px(默认auto)"
      className="mt-d"
    />
    <sl-button size="button-small" className="mt-d">确定</sl-button>
    <sl-button size="button-small" width="120rpx" className="mt-d">确定</sl-button>

    <Tip
      title="其它"
      desc="圆角radius=default, 统一主题设置theme=someObj等就不一一介绍了"
      className="mt-d"
    />
  </s-page>
</template>
<script setup lang="ts">
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';
  const themes = ['primary', 'success', 'error'];
</script>
