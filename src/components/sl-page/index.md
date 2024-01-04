# sl-page 页面根结点组件

已整合导航栏组件, 可自动控制 left 或 home 按钮。
作为页面根结点组件，可用于控制各个页面的风格、间距、页面加载状态、通知栏等————需要再次做二次封装

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz |
| :-------: | :---: | :---: | :----: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|        属性        |   类型   | 默认         | 描述                                               |
| :----------------: | :------: | :----------- | :------------------------------------------------- |
|     showNavBar     | boolean  | true         | 是否显示导航栏                                     |
|      navBarBg      |  IColor  | white        | 导航栏背景                                         |
|    navBarColor     |  IColor  | content      | 导航栏标题颜色                                     |
| safeBottomPadding  | boolean  | true         | 是否自动填充安全底部的空白                         |
| pageLoadingStatus  |  0/1/2   | 1            | 0-加载中，1-成功，2-或失败, 默认 1                 |
|       title        |  string  | ''           | 标题                                               |
|     showTitle      | boolean  | true         | 是否显示标题文本                                   |
| autoHomeOrLeftIcon | boolean  | true         | 左侧是否自动控制 home 或 left 图标                 |
|     iconColor      |  IColor  | content      | 左图标的颜色类型                                   |
|      iconSize      |  number  | 48           | 左图标的尺寸                                       |
|      iconLib       |  string  | sl-ui-common | 左图标的图标库                                     |
|    filterPages     | string[] | []           | 不需要在左侧显示图标的页面, 一般是登录页及各大首页 |
|      homePath      |  string  | ''           | 主页,即点击 home 图标后 relauch 的页面             |

### 插糟

|    名称     | 参数 | 描述                                  |
| :---------: | :--: | ------------------------------------- |
| navBarLeft  |      | 导航栏左侧, 注意不包含 left/home 图标 |
| navBarRight |      | 导航栏右侧                            |
|   loading   |      | 需要 pageLoadingStatus===0            |
|   default   |      | 需要 pageLoadingStatus===1            |
|    error    |      | 需要 pageLoadingStatus===2            |

### 事件

|     名称     | 参数 | 描述     |
| :----------: | :--: | -------- |
| onClickTitle |      | 点击标题 |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

二次封装 page 的简单示例

#### template:

```
  <sl-page
    :title="title"
    :className="className"
    v-bind="themes[theme]"
    :homePath="homePath"
    :filterPages="filterPages"
    :autoHomeOrLeftIcon="autoHomeOrLeftIcon"
  >
    <template #navBarLeft><slot name="navBarLeft" /></template>
    <template #navBarRight><slot name="navBarRight" /></template>
    <slot />
    <sl-fill-line v-if="hasBottom" size="button-default" />
  </sl-page>
```

#### js

```
<script lang="ts">
  const ComponentName = 's-page';
  export default {
    name: ComponentName,
    options: {
      virtualHost: true,
      inheritAttrs: false,
    },
  };
</script>
<script setup lang="ts">
  import type { IThemeType } from './themes';

  import themes from './themes';
  interface IProps {
    title: string;
    className?: string | string[];
    theme?: IThemeType;
    autoHomeOrLeftIcon?: boolean;
    hasBottom?: boolean;
  }
  withDefaults(defineProps<IProps>(), {
    title: '',
    className: '',
    theme: 'default',
    autoHomeOrLeftIcon: true,
    hasBottom: true,
  });
  const filterPages = ['/pages/home/index','/pages/login/index'];
  const homePath = '/pages/login/index';
</script>


```
