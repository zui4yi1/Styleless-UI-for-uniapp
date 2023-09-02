<template>
  <s-page title="快速上手" className="plr-l">
    <Brief>
      <view>
        本款 Styleless UI 库基于"样式组件化"的概念开发, 如此才能做到 styleless 的效果,
        故使用前需先了解"样式组件化"的概念
      </view>
    </Brief>
    <view></view>
    <Tip title="样式组件化">
      <view>样式组件化, 把工程的样式分成两大类, 一是公共样式, 二是原子样式。</view>
      <view class="mt-s">公共样式: 包括布局、文字、定位、通用边框, 等等, 是所有工程都通用的.</view>
      <view class="mt-s">
        原子样式: 是每个工程独有的样式和风格, 包括颜色、字体、间距、背景, 等等, 是每个工程都不一样.
      </view>
      <view class="mt-s bold color-content">
        样式组件化, 就是把这两类样式按照一定的规则, 细分、并整理完善,
        形成一份语义清晰且使用简单的样式组件库。
      </view>
      <view class="mt-s bold color-content">
        同时, 专门开发出一套独有的"样式组件编绎器", 通过使用npx命令,
        即可轻松的生成独属于你工程风格的样式组件库。例如, flex-between代表左右布局,
        color-primary代表品牌主颜色, font-content代表正文字体的尺寸。
      </view>
      <view class="mt-s">
        当然, 这种思想其实一直以来都有, 只是没有人专门去细分, 并整理完善, 且也没有专门的样式生成器,
        故而一般是开发者自己随手写几个, 然后只给自己随手用用
      </view>
    </Tip>
    <Tip title="定制化你的样式组件库" className="mt-d">
      <view class="bold color-content">
        style-component-compiler, "样式组件编绎器"可以轻松的帮你一键定制化你的样式组件。使用npx命令,
        在npmjs官网上搜索即可。
      </view>
    </Tip>
    <Tip title="定制化你的UI库" className="mt-d">
      <view class="bold color-content">
        是的, 你没理解错! 就是定制UI库! Styleless UI可以很轻易的实现UI库的定制功能。
        因为她本身不仅仅没有样式, 连骨架和DNA的风格也是可以轻易替换的!
        可以轻松解决你UI选型及UI库二次封装的烦恼。
      </view>
    </Tip>
    <Tip title="安装Styleless UI库及使用" className="mt-d">
      <view class="mt-s">基于uniapp开发的, 技术栈vscode+vue3+cli+ts</view>
      <view class="bold color-content mt-s">安装: yarn add styleless-ui-for-uniapp</view>
      <view class="bold color-content mt-s">配置: 按uniapp的easyCom规范配置即可</view>
      <view class="bold color-content mt-s">使用：组件的前缀是sl-, 即style-less的简写</view>
      <view class="bold color-content mt-s">
        样式与icon: 确保你已定制好"样式组件库"并导入, 若无icon图标可先拷贝UI库的
      </view>
    </Tip>
  </s-page>
</template>
<script setup lang="ts">
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];
</script>
