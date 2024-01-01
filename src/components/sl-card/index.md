# sl-card 卡片容器

默认带圆角、阴影的容器

### 通用七类样式属性

| className | color |    bg    |  radius  | font  | size  |          bodyClz          |
| :-------: | :---: | :------: | :------: | :---: | :---: | :-----------------------: |
| &#10003;  | &Chi; | &#10003; | &#10003; | &Chi; | &Chi; | &#10003; 默认 plr-l ptb-d |

### 其它属性

|   属性    |  类型   | 默认                         | 描述         |
| :-------: | :-----: | :--------------------------- | :----------- |
| borderClz | string  | `border border-line-default` | 默认边框样式 |
| hasShadow | boolean | true                         | 是否有阴影   |

### 插糟

|  名称   | 参数 | 描述 |
| :-----: | :--: | ---- |
| default |  无  | 任意 |

### 事件

| 名称  | 参数 | 描述 |
| :---: | :--: | ---- |
| click |      |      |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

#### template:

```
    <!--蓝边框-->
    <sl-card borderClz="border border-primary">
      <view>卡片卡片</view>
      <view>卡片卡片。。。</view>
    </sl-card>

    <!--无边框、灰背景-->
    <sl-card borderClz="border-none" bg="fill-default">
      <view>卡片卡片</view>
      <view>卡片卡片。。。</view>
    </sl-card>
```
