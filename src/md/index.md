# styleless

写样式，更具“灵性”

### 通用七类样式属性

|   属性    |         类型         |                        描述                         |              示例              |
| :-------: | :------------------: | :-------------------------------------------------: | :----------------------------: |
| className |       `string`       |     透传类到组件的根结点, 常用于设置间距或背景      | `<sl-card  className="mt-d"/>` |
|   color   |       `IColor`       |                      字体颜色                       |  ` <sl-tags color="white" />`  |
|    bg     |       `IColor`       |                      背景颜色                       |    `<sl-tags bg="white" />`    |
|  radius   |      `IRadius`       |                圆角,带边框的组件都有                |             单元格             |
|   font    |       `IFont`        |                   文本字体的尺寸,                   |  `font-content`,`font-title`   |
|   size    | `IHeight` 或像素单位 | 仅两种, 与 sl-icon 有关时是像素单位, 其它都是高度类 |
| ——Clz 类  |       `string`       |    如`bodyClz, paddingClz` 令配置 dom 样式更灵活    |    大部分组件都有`bodyClz`     |

### 弹窗类

打开参数都是`open`, 用双向绑定方式, 即`v-model:open`

### list 或 tree 类

统一都是`label,value,children`格式, 暂时不是所有的`list或tree`都提供了字段映射属性 `dataMap`

### 禁用颜色

为了简洁, 一律采用`opacticy-disabled`样式, 即 `opacity = 0.5`

### 双向绑定

注意 对于 `value` 必须使用`v-model:value=XXX`而不是简写方式`v-model=XXX`。这是早期使用`update:value`的开发问题, 后续会逐步还原 `v-model`简写模式
