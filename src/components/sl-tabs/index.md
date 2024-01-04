# sl-tabs 标签页组件

只有标签行, 无内容块, 具体展示由 current 控制即可

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz  |
| :-------: | :---: | :---: | :----: | :---: | :---: | :------: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; | &#10003; |

### 其它属性

|    属性     |      类型      | 默认  | 描述                                                                              |
| :---------: | :------------: | :---- | :-------------------------------------------------------------------------------- |
|   current   |     number     | 0     | 使用时必须使用 v-model:current 的形式                                             |
|    list     | {name,count}[] | []    | 标签列表, {name, count}形式, name 是标签名, count 是数量可不传(一般 作为角标使用) |
|   scroll    |    boolean     | false | 是否有横向滚动, 为 false 时居中布局                                               |
| showDivider |    boolean     | false | 是否显示分割线                                                                    |

### 插糟

| 名称  | 参数 | 描述                  |
| :---: | :--: | --------------------- |
| count |      | 带 count 时可使用插糟 |

### 事件

|  名称  | 参数 | 描述 |
| :----: | :--: | ---- |
| change | inx  |      |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

#### template:

```
<sl-tabs v-model:current="current" :list="list"/>
<sl-tabs v-model:current="current" :list="list" scroll />
<sl-tabs v-model:current="current" :list="list2" scroll />
```

#### js

```
  const current = ref(0);

  const list = [
    {
      name: '数学',
    },
    {
      name: '语文',
    },
    {
      name: '英语英语',
    },
    {
      name: '物理',
    },
    {
      name: '化学',
    },
    {
      name: '生物',
    },
    {
      name: '体育',
    },
    {
      name: '历史',
    },
    {
      name: '地理',
    },
    {
      name: '政治',
    },
  ];

  const list2 = [
    {
      name: '数学',
    },
    {
      name: '语文',
    },
    {
      name: '英语',
    },
    {
      name: '物理',
    },
    {
      name: '化学',
      count: 10,
    },
    {
      name: '生物',
    },
    {
      name: '体育',
    },
    {
      name: '历史',
    },
    {
      name: '地理',
    },
    {
      name: '政治',
    },
  ];

```
