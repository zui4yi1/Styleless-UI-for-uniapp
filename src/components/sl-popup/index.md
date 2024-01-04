# sl-popup 底部弹窗组件

本身只有一个标题, 内容自定义, 可作 sl-select, sl-picker 等组件

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz |
| :-------: | :---: | :---: | :----: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|    属性    |   类型    | 默认  | 描述                                                           |
| :--------: | :-------: | :---- | :------------------------------------------------------------- |
|    open    |  boolean  | false | 是否打开弹窗                                                   |
|   title    |  string   | ''    | 弹窗标题                                                       |
| closeOnTab |  boolean  | false | 是否点击遮罩时关闭弹窗                                         |
|    mode    | icon/text | text  | 关闭模式,icon(只有一个 X 图标)或 text(有取消和确定), 默认 text |

### 插糟

|  名称   | 参数 | 描述     |
| :-----: | :--: | -------- |
| default |      | 任意内容 |

### 事件

|  名称   | 参数 | 描述 |
| :-----: | :--: | ---- |
| confirm |      |      |
|  close  |      |      |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

#### template:

```
  <sl-popup v-model:open="open1" mode="text" title="标题标题">
    <view class="p-all-l">{{ '自定义'.repeat(20) }}</view>
  </sl-popup>
  <sl-popup v-model:open="open2" mode="icon" title="标题标题">
    <view class="p-all-l">{{ '自定义'.repeat(20) }}</view>
  </sl-popup>

```
