# sl-col `grid 栅格布局组件`

使用 float 方式, 故所有项必须保持高度一致。height 在`sl-row`上定义即可。

### 通用七类样式属性

| className | color |    bg    | radius | font  | size  | bodyClz  |
| :-------: | :---: | :------: | :----: | :---: | :---: | :------: |
| &#10003;  | &Chi; | &#10003; | &Chi;  | &Chi; | &Chi; | &#10003; |

### 其它属性

|  属性  |  类型  | 默认 | 描述                |
| :----: | :----: | :--- | :------------------ |
|  span  | number | 6    | 占据多少格          |
| offset | number | 0    | 左边偏移多少格      |
| align  | string | left | text-align 对齐方式 |

### 插糟

|  名称   | 参数 | 描述 |
| :-----: | :--: | ---- |
| default |  无  | 任意 |

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
