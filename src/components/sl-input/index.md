# xxx

xxx

### 通用七类样式属性

| className |  color   |    bg    |  radius  | font  | size  | bodyClz |
| :-------: | :------: | :------: | :------: | :---: | :---: | :-----: |
| &#10003;  | &#10003; | &#10003; | &#10003; | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|       属性       |     类型      | 默认                              | 描述                                                                         |
| :--------------: | :-----------: | :-------------------------------- | :--------------------------------------------------------------------------- |
|       type       |    string     | 'text'                            | 输入框类型                                                                   |
|      value       |    string     | ''                                | 双向绑定 v-model:value                                                       |
|    paddingClz    |    string     | plr-d                             | 原生 input 与边框的间距                                                      |
|    borderClz     |    string     | border-bottom border-line-default | type 不为 textarea 时的边框样式, 默认只有底边框                              |
|    heightSize    |    IHeight    | cell-default                      | type 不为 textarea 时的高度类                                                |
|      height      |    string     | 4em                               | type 为 textarea 时的高度, 使用时需带单位                                    |
|     fontSize     |    string     | content                           | 文字尺寸                                                                     |
|      align       |    string     | left                              | 对齐                                                                         |
|      prefix      |    string     | ''                                | 前缀                                                                         |
|    prefixClz     |    string     | ''                                | 前缀类名                                                                     |
|      suffix      |    string     | ''                                | 后缀文本                                                                     |
|    suffixClz     |    string     | ''                                | 后缀类名                                                                     |
|    maxlength     |    number     | 200                               | 最大输入                                                                     |
|   placeholder    |    string     | 请输入                            | 缺省占位文字                                                                 |
| placeholderStyle |    string     | font-size: 28rpx                  | 缺省占位文字的样式                                                           |
|     disabled     |    boolean    | false                             | 是否禁用                                                                     |
|      fixed       |    boolean    | false                             | 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true |
|    showClear     |    boolean    | true                              | 是否自动显示清空按钮                                                         |
|   confirmType    |    string     | 完成                              | 完成输入的文本                                                               |
|  cursorSpacing   |    number     | 6                                 | 光标与输入框的距离                                                           |
|  SelectionStart  |    number     | -1                                | 选中开始距离                                                                 |
|   SelectionEnd   |    number     | -1                                | 选中结束距离                                                                 |
|     styleObj     | CSSProperties | {}                                | 样式                                                                         |
|     leftIcon     |    object     | {}                                | 左图标对象, 完整的 sl-icon 参数                                              |
|    clearIcon     |    object     | {}                                | 清空图标对象, 完整的 sl-icon 参数                                            |
|     eyeIcon      |    object     | {}                                | 眼睛图标对象, 完整的 sl-icon 参数                                            |

### 插糟

|   名称   | 参数 | 描述             |
| :------: | :--: | ---------------- |
|  prefix  |  无  | 增加前缀         |
|  right   |  无  | 增加后缀         |
| validate |  无  | 用于验证提示那些 |
|   foot   |  无  | 增加自定义底部   |

### 事件

|  名称   | 参数 | 描述                      |
| :-----: | :--: | ------------------------- |
|  input  | val  | 实时输入事件              |
|  focus  |  无  | 获得焦点                  |
|  blur   |  无  | 失去焦点                  |
| change  | val  | 也是实时输入事件          |
| confirm | val  | textarea 点击完成时的事件 |
| onLeft  |  无  | 点击左图标时的事件        |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

#### template:

```
<sl-input v-model:value="inputVal" borderClz="border" />
<sl-input v-model:value="inputVal" borderClz="border border-primary" radius="default" />
<sl-input v-model:value="inputVal" paddingClz="" type="password" />
<view class="bg-fill-default p-all-xl">
    <sl-input v-model:value="inputVal" borderClz="border-none" radius="default" />
</view>
```
