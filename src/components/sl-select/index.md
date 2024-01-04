# sl-select 下拉选择组件

底部弹窗形式

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz |
| :-------: | :---: | :---: | :----: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|   属性   |      类型       | 默认   | 描述                                               |
| :------: | :-------------: | :----- | :------------------------------------------------- |
|   open   |     boolean     | false  | 是否打开弹窗, 须使用 v-model:open 双向绑定方式     |
|  value   |     string      | ''     | 使用时必须使用 v-model:value 的形式                |
|  title   |     string      | 请选择 | 弹窗标题                                           |
|   list   | {label,value}[] | []     | 选项列表, label, value 形式, 暂无 dataMap 字段映射 |
| multiple |     boolean     | false  | 是否多选                                           |

### 插糟

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 事件

|  名称  | 参数 | 描述         |
| :----: | :--: | ------------ |
| change | vals | 点确定后触发 |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

#### template:

```
<sl-select v-model:open="open1" v-model:value="val" :list="list"></sl-select>
<sl-select v-model:open="open2" v-model:value="val2" :list="list" multiple></sl-select>
```

#### js

```
  const val = ref('');
  const val2 = ref([]);
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
```
