# sl-switch 开关组件

因为圆角问题, 故高和宽都必须传实际值, 而不是类名

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz  |
| :-------: | :---: | :---: | :----: | :---: | :---: | :------: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; | &#10003; |

### 其它属性

|   属性   |  类型   | 默认  | 描述                                |
| :------: | :-----: | :---- | :---------------------------------- |
|  value   | boolean | false | 使用时必须使用 v-model:value 的形式 |
|  width   | number  | 56    | 高度, 注意不能带单位, 默认 56(rpx)  |
|  height  | number  | 40    | 宽度, 注意不能带单位, 默认 40(rpx)  |
| disabled | boolean | false | 是否禁用                            |

### 插糟

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 事件

|  名称  | 参数 | 描述 |
| :----: | :--: | ---- |
| change | val  |      |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

#### template:

```
<sl-switch v-model:value="val" />
<sl-switch v-model:value="val" disabled />
<sl-switch v-model:value="val" :height="60" :width="60" />
```
