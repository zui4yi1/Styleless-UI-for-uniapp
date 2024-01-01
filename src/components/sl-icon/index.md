# sl-icon 图标组件

iconfont 形式的图标

### 通用七类样式属性

| className |  color   |  bg   | radius | font  | size  | bodyClz |
| :-------: | :------: | :---: | :----: | :---: | :---: | :-----: |
| &#10003;  | &#10003; | &Chi; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|    属性    |  类型  | 默认           | 描述                                                  |
| :--------: | :----: | :------------- | :---------------------------------------------------- |
|  iconLib   | string | 'sl-ui-common' | iconfont 库, 一个工程可同时存在多个库, 用这个区分即可 |
|    name    | string | 'icon_add'     | 图标名称                                              |
|    size    | number | 28             | 图标尺寸, 不能传单位, 实际作用于 font-size            |
| hoverClass | string | ''             | 点击时的颜色                                          |
| styleProps | object | {}             | style 对象, 貌似没啥用                                |

### 插糟

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 事件

| 名称  | 参数 | 描述 |
| :---: | :--: | ---- |
| click |      | 无   |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

#### template:

```
<sl-icon name="icon_search" />
<sl-icon color="primary" name="icon_check" />
<sl-icon color="success" name="icon_check" :size="40" />
```
