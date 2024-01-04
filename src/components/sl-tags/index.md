# sl-tags

只有单个时直接传 label, 有多个时传 list

### 通用七类样式属性

| className |  color   |    bg    |  radius  |   font   |   size   | bodyClz  |
| :-------: | :------: | :------: | :------: | :------: | :------: | :------: |
| &#10003;  | &#10003; | &#10003; | &#10003; | &#10003; | &#10003; | &#10003; |

### 其它属性

|    属性    |         类型         | 默认  | 描述                               |
| :--------: | :------------------: | :---- | :--------------------------------- |
|   label    |        string        | ''    | 标记名, 只有单个时使用             |
|    list    | {label, bg, color}[] | []    | 标记列表, 有多个时使用             |
|    type    |       text/bg        | bg    | 展示模式, text-只有文字, bg-带背景 |
| showDelete |       boolean        | false | 是否显示删除                       |

### 插糟

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 事件

| 名称  | 参数 | 描述           |
| :---: | :--: | -------------- |
| click | inx  | 删除事件可使用 |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

#### template:

```
<sl-tags label="标签" color="white" />
<sl-tags label="标签" color="white" bodyClz=" radius-cell-default plr-l ptb-xs" class="" />
<sl-tags label="标签" type="text" color="primary" />
<sl-tags :list="tags" showDelete />
<sl-tags :list="tags" />
<sl-tags :list="tags" type="text" />
```

#### js

```
  const tags = [
    {
      label: '标签1',
      bg: 'success',
    },
    {
      label: '标签2',
    },
    {
      label: '标签3333333333333333333333333333333333333333333',
    },
    {
      label: '标签4',
    }-
  ];
```
