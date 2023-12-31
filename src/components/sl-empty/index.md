# sl-empty 无数据的缺省组件

可用于横向的组件无数据，也可用于纵向的页面级的无数据。若默认图标是多色的直接用 slot

### 通用七类样式属性

| className |  color   |    bg    | radius | font  |   size   | bodyClz |
| :-------: | :------: | :------: | :----: | :---: | :------: | :-----: |
| &#10003;  | &#10003; | &#10003; | &Chi;  | &Chi; | &#10003; |  &Chi;  |

### 其它属性

|   属性   |  类型  | 默认              | 描述                     |
| :------: | :----: | :---------------- | :----------------------- |
|   type   |  x/y   | x                 | 方向, 横向或纵向         |
|   top    | number | 300(内置单位 rpx) | type 为 y 时距顶部的距离 |
| iconName | string | `icon_nodata`     | 图标 icon                |
| content  | string | 暂无数据          | 提示文字                 |

### 插糟

|  名称   | 参数 | 描述               |
| :-----: | :--: | ------------------ |
| default |      | 除了图标的内容提示 |

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
<sl-empty />
<sl-empty bg="blue" color="white" />
<sl-empty type="y" />
```
