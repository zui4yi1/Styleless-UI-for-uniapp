# sl-action-sheet 操作菜单组件

弹出一个具有各种操作的菜单

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz |
| :-------: | :---: | :---: | :----: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

| 属性  |          类型          | 默认  | 描述                                           |
| :---: | :--------------------: | :---- | :--------------------------------------------- |
| open  |        boolean         | false | 是否打开弹窗, 须使用 v-model:open 双向绑定方式 |
| title |         string         | ''    | 弹窗标题                                       |
| list  | {label,color,disabled} | []    | sheet 列表                                     |

### 插糟

| 名称 | 参数 | 描述                                |
| :--: | :--: | ----------------------------------- |
| item | item | item 即 list 的项, 自定义每项的展示 |

### 事件

|  名称  | 参数 | 描述     |
| :----: | :--: | -------- |
| select | inx  | 选中事件 |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

#### template:

```
    <sl-action-sheet v-model:open="open" :list="list" title="请选择操作类型" />
```

#### js:

```
 const list = [
    {
      label: '新增',
      color: 'primary',
    },
    {
      label: '编辑',
      color: 'content',
    },
    {
      label: '不可点击',
      color: 'disabled',
      disabled: true,
    },
    {
      label: '其它1',
    },
    {
      label: '其它2',
    },
    {
      label: '删除',
      color: 'error',
    },
  ]

```
