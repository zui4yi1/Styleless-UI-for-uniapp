# sl-radio 筛选框

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz |
| :-------: | :---: | :---: | :----: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|   属性    |  类型   | 默认                          | 描述                                              |
| :-------: | :-----: | :---------------------------- | :------------------------------------------------ |
|   value   |  array  | []                            | 使用时必须使用 v-model:value 的形式               |
|   list    |  array  | []                            | 选项列表,{label,value}格式, 暂无 dataMap 字段映射 |
| direction |   x/y   | x                             | 布局方向, 水平/纵向                               |
| disabled  | boolean | false                         | 是否禁用                                          |
| labelClz  | string  | `font-content与color-content` | 标签的样式类                                      |
| iconSize  | Number  | 28                            | 打勾图标的尺寸                                    |
|  iconLib  | string  | sl-ui-common                  | 图标库名                                          |
| iconName  | string  | icon_check                    | 打勾图标名                                        |

### 插糟

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 事件

|  名称  | 参数 | 描述                 |
| :----: | :--: | -------------------- |
| change | val  | 参数是改变后的所有值 |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

#### template:

```
    <Tip title="默认" desc="v-model:value=val, list=list" />
    <sl-radio v-model:value="val" :list="list" className="mt-d" />

    <Tip title="垂直方向" desc="direction=y" className="mt-d" />
    <sl-radio v-model:value="val" :list="list" direction="y" className="mt-d" />

    <Tip title="禁用" desc="disabled=true" className="mt-d" />
    <sl-radio v-model:value="val" :list="list" disabled className="mt-d" />


    <Tip title="文字换行" desc="文字太多时, 会自动换行, 当然最好使用垂直模式" className="mt-d" />
    <sl-radio v-model:value="val" direction="y" :list="list2" className="mt-d" />
```

#### js

```
  const list = [
    {
      label: '数学',
      value: 0,
    },
    {
      label: '语文',
      value: 1,
    },
    {
      label: '英语',
      value: 2,
    },
    {
      label: '数学',
      value: 3,
    },
  ];

  const list2 = [
    {
      label: '数学',
      value: 0,
    },
    {
      label: '语文',
      value: 1,
    },
    {
      label:
        '文字比较多比较多比较多比较多比较多比较多比较多比较多比较多比较多比较多比较多比较多比较多',
      value: 2,
    },
    {
      label: '数学',
      value: 3,
    },
  ];
```
