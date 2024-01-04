# sl-picker 联动组件

不联动的暂未实现, 参数 hasAll 可自动在列头增加名为"全部"的空值选项

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz |
| :-------: | :---: | :---: | :----: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|      属性      |  类型   | 默认  | 描述                                                                                                  |
| :------------: | :-----: | :---- | :---------------------------------------------------------------------------------------------------- |
|      open      | boolean | false | 是否打开弹窗, 须使用 v-model:open 双向绑定方式                                                        |
|     title      | string  | ''    | 弹窗标题                                                                                              |
|     hasAll     | boolean | false | 是否给每列添加"全部"的空值选项                                                                        |
|     value      | string  | []    | 必须使用 v-model:value 的方式使用                                                                     |
|    columns     | string  | 3     | 列数, 必须指定多少列                                                                                  |
|    dataMap     | string  |       | 数据映射, 即{label,value,children}的映射                                                              |
|      list      | string  | []    | {label,value,children}格式的列表                                                                      |
| pickViewHeight | string  |       | 每项的高度, 默认 uni.upx2px(68)+px, 必须使用 uni.upx2px 转成 px 格式, 直接使用 rpx 会有小数导致不居中 |
|  indicatorClz  | string  |       | 选中项的类，默认 text-center border-line-light border-top border-bottom(即文本居中+上下边框)          |
| indicatorStyle | string  |       | 选中项的样式, 默认 height: uni.upx2px(68)+px                                                          |

### 插糟

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 事件

|  名称  | 参数 | 描述           |
| :----: | :--: | -------------- |
| change |      | 选中值, 非索引 |

### 方法

|   名称    | 参数 | 描述             |
| :-------: | :--: | ---------------- |
| getLabels |      | 返回值对应的标签 |

### 示例

#### template:

```
 <sl-picker ref="pickRef" v-model:open="open1" title="请选择" v-model:value="val" :list="list" />
```

#### js

```
  const open1 = ref(false);
  const val = ref([]);
  const list = [
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
