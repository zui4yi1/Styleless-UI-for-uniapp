# sl-row `grid 栅格布局组件`

使用 float 方式, 故所有项必须保持高度一致。height 在`sl-row`上定义即可。

### 通用七类样式属性

| className | color |  bg   |  radius  | font  | size  | bodyClz |
| :-------: | :---: | :---: | :------: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &Chi; | &#10003; | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|   属性    |  类型  | 默认 | 描述                                                    |
| :-------: | :----: | :--- | :------------------------------------------------------ |
|  gutter   | number | 16   | 横向间距, 注意不能带单位, 默认 16(rpx)                  |
| rowGutter | number | 0    | 纵向间距, 同 gutter 默认 0, (若为 0 实际与 gutter 相同) |
|  height   | number | 88   | 每项的高度,默认 88, 注意不能带单位(内置单位 rpx)        |

### 插糟

|  名称   | 参数 | 描述      |
| :-----: | :--: | --------- |
| default |  无  | 放 sl-col |

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
    <sl-row :height="160" radius="default" >
      <sl-col v-for="color in themes" :key="color" :bg="color" bodyClz="p-all-d color-white">
        {{ color }}
      </sl-col>
    </sl-row>
```

#### js

```
  const themes = ['primary', 'success', 'error', 'pink', 'purple'];
```
