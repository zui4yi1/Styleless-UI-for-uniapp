# sl-mask 遮罩组件

所有弹窗类组件的根组件

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz |
| :-------: | :---: | :---: | :----: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|    属性    |             类型             | 默认   | 描述                                           |
| :--------: | :--------------------------: | :----- | :--------------------------------------------- |
|    open    |           boolean            | false  | 是否打开弹窗, 须使用 v-model:open 双向绑定方式 |
| closeOnTab |           boolean            | true   | 是否点击遮罩时关闭弹窗                         |
|    mode    | left/bottom/right/top/center | bottom | 模式, 即内容在什么地方                         |
|   width    |            string            | 66%    | mode 为 center 时的宽度 , 需自带单位           |

### 插糟

|  名称   | 参数 | 描述 |
| :-----: | :--: | ---- |
| default |      | 任意 |

### 事件

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

#### template:

```
    <sl-mask mode="left" v-model:open="openLeft" closeOnTab>
      <view class="h100 bg-white w-120">左侧...</view>
    </sl-mask>
    <sl-mask mode="right" v-model:open="openRight" closeOnTab>
      <view class="h100 bg-white w-120">右侧...</view>
    </sl-mask>
    <sl-mask mode="top" v-model:open="openTop" closeOnTab>
      <view class="w100 bg-white h-120">顶部...</view>
    </sl-mask>
    <sl-mask mode="bottom" v-model:open="openBottom" closeOnTab>
      <view class="w100 bg-white h-120">底部...</view>
    </sl-mask>
    <sl-mask mode="center" v-model:open="openCenter" closeOnTab>
      <view class="w100 bg-white h-120">居中...</view>
    </sl-mask>
```

#### js

```
  const openLeft = ref(false);
  const openRight = ref(false);
  const openTop = ref(false);
  const openBottom = ref(false);
  const openCenter = ref(false);

```
