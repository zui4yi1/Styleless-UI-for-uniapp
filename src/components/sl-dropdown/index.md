# sl-dropdown 筛选组件

即插即拔模式, 即选项是通过 `sl-dropdown-item` 自身控制的, 本身无 list 参数

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz |
| :-------: | :---: | :---: | :----: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|  属性  |  类型   | 默认 | 描述                                                    |
| :----: | :-----: | :--- | :------------------------------------------------------ |
| scroll | boolean | true | 是否滚动, 即多个时有滚动条, 若为 false 则是居中对齐模式 |

### 插糟

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 事件

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 方法

| 名称  | 参数 | 描述                                          |
| :---: | :--: | --------------------------------------------- |
| reset |      | 清空所有项的选中值(带初始值的 reset 后续再做) |

### 示例

#### template:

```
    <sl-dropdown className="mt-d">
      <sl-dropdown-item title="类型" :list="list" v-model:value="val" />
      <sl-dropdown-item title="价格" type="sort" />
      <sl-dropdown-item title="班级" type="cascade" v-model:value="clazz" :list="tree" />
      <sl-dropdown-item title="日期" type="date" v-model:value="dateText" maxWidth="200rpx" />
    </sl-dropdown>
```

#### js

```
  const val = ref();
  const clazz = ref();
  const vals = ref([]);
  const dateText = ref('');
  const list = [
    {
      label: '数学',
      value: 1,
    },
    {
      label: '语文',
      value: 2,
    },
  ];

  const tree = [
    {
      label: '高中',
      value: 'h',
      children: [
        {
          label: '高一',
          value: 'h1',
          children: [
            { label: '高一1班', value: 'h11' },
            { label: '高一2班', value: 'h12' },
          ],
        },
        {
          label: '高二',
          value: 'h2',
          children: [
            { label: '高二1班', value: 'h21' },
            { label: '高二2班', value: 'h22' },
          ],
        },
        {
          label: '高三',
          value: 'h3',
          children: [
            { label: '高三1班', value: 'h31' },
            { label: '高三2班', value: 'h32' },
          ],
        },
      ],
    },
    {
      label: '初中',
      value: 'c',
      children: [
        {
          label: '初一',
          value: 'c1',
          children: [
            { label: '初一1班', value: 'c11' },
            { label: '初一2班', value: 'c12' },
          ],
        },
        {
          label: '初二',
          value: 'c2',
          children: [
            { label: '初二1班', value: 'c21' },
            { label: '初二2班', value: 'c22' },
          ],
        },
      ],
    },
  ];

```
