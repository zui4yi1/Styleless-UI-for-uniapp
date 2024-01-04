# sl-modal 模态弹框组件

即 mode 为 center，且自带标签、按钮等的弹窗

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz |
| :-------: | :---: | :---: | :----: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|    属性     |  类型   | 默认  | 描述                   |
| :---------: | :-----: | :---- | :--------------------- |
|    open     | boolean | false | 是否打开弹窗           |
| closeOnTab  | boolean | false | 是否点击遮罩时关闭弹窗 |
|    title    | string  | ''    | 弹窗标题               |
|  hasTitle   | boolean | true  | 是否有标题             |
| cancelText  | string  | 取消  | 默认"取消"             |
| confirmText | string  | 确定  | 默认"确定"             |
|  hasClose   | boolean | false | 是否有关闭图标         |
|  hasCancel  | boolean | true  | 是否有取消按钮         |
| hasConfirm  | boolean | true  | 有否有确认按钮         |
|   hasFoot   | boolean | true  | 是否有 foot            |

### 插糟

|  名称   | 参数 | 描述 |
| :-----: | :--: | ---- |
| default |      | 任意 |

### 事件

|  名称   | 参数 | 描述     |
| :-----: | :--: | -------- |
| confirm |      | 点击确认 |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

#### template:

```
  <sl-modal v-model:open="open" title="提示">
    <view class="font-secondary color-placeholder">自定义...</view>
  </sl-modal>
  <sl-modal v-model:open="open2" title="提示" :hasCancel="false">
    <view class="font-secondary color-placeholder">自定义...</view>
  </sl-modal>
  <sl-modal v-model:open="open3" title="提示" :hasFoot="false" hasClose>
    <view class="font-secondary color-placeholder">自定义...</view>
  </sl-modal>
  <sl-modal v-model:open="open4" title="提示" :hasFoot="false" closeOnTab>
    <view class="font-secondary color-placeholder">自定义...</view>
  </sl-modal>
```

#### js

```
  const open = ref(false);
  const open2 = ref(false);
  const open3 = ref(false);
  const open4 = ref(false);

```
