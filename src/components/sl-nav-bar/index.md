# sl-nav-bar 导航栏组件

可自动显示 home 或 left 图标

### 通用七类样式属性

| className |  color   |    bg    | radius | font  | size  | bodyClz |
| :-------: | :------: | :------: | :----: | :---: | :---: | :-----: |
| &#10003;  | &#10003; | &#10003; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|        属性        |   类型   | 默认         | 描述                                               |
| :----------------: | :------: | :----------- | :------------------------------------------------- |
|       title        |  string  | ''           | 标题                                               |
|     showTitle      | boolean  | true         | 是否显示标题文本                                   |
| autoHomeOrLeftIcon | boolean  | true         | 左侧是否自动控制 home 或 left 图标                 |
|     iconColor      |  IColor  | content      | 左图标的颜色类型                                   |
|      iconSize      |  number  | 48           | 左图标的尺寸                                       |
|      iconLib       |  string  | sl-ui-common | 左图标的图标库                                     |
|    filterPages     | string[] | []           | 不需要在左侧显示图标的页面, 一般是登录页及各大首页 |
|      homePath      |  string  | ''           | 主页,即点击 home 图标后 relauch 的页面             |

### 插糟

|  名称   | 参数 | 描述                         |
| :-----: | :--: | ---------------------------- |
|  left   |      | 左侧插糟, 注意不包含左侧图标 |
| default |      | 导航栏标题                   |
|  right  |      | 右侧                         |

### 事件

|     名称     | 参数 | 描述           |
| :----------: | :--: | -------------- |
| onClickTitle |      | 点击标题的事件 |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

见 sl-page, 已与其整合一起

#### template:

```

```

#### js

```

```
