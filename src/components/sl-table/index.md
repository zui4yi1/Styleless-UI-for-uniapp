# sl-table 表格组件

小程序无原生表格组件, 故采用 display-table 的方式写了一个
支持 json 和 custom 两种模式

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz |
| :-------: | :---: | :---: | :----: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|    属性     |        类型         | 默认  | 描述                                                                                         |
| :---------: | :-----------------: | :---- | :------------------------------------------------------------------------------------------- |
| cellspacing |       string        | ''    | cell 间距                                                                                    |
|   custom    |       string        | false | 是否自定义,默认 false, 即走 json 配置模式。为 true 时，需手动使用 sl-th,sl-tr,sl-td 这些标签 |
| tableProps  | {thClz,trClz,tdClz} | {}    | 各 dom 的样式类, custom 为 false 时可用, table 的样式类。可分别配置{thClz,trClz,tdClz}的类名 |
|   columns   | {name,value,width}  | {}    | 列的定义, custom 为 false 时可用列, 可分别定义{name,value,width}                             |
|    list     |        array        | []    | custom 为 false 时可用, 具体属性与 columns 对应                                              |

### 插糟

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

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
<!--json模式-->
<sl-table
    :tableProps="tableProps"
    cellspacing="2rpx"
    :columns="columns"
    :list="list"
    className="mt-d"
/>

<!--custom模式 -->
<sl-table custom cellspacing="2rpx" :tableProps="tableProps" className="mt-d">
    <sl-th>
    <sl-td v-for="item in columns" :key="item.value" :tdClz="tableProps.thClz">
        {{ item.name }}
    </sl-td>
    </sl-th>
    <sl-tr v-for="(ls, inx) in list" :key="'tr_' + inx">
    <sl-td v-for="item in columns" :key="`${ls.id}${item.value}`">
        {{ (ls as any)[item.value] }}
    </sl-td>
    </sl-tr>
</sl-table>

```

#### js

```
const tableProps = {
    thClz: 'bg-primary h-72',
    tdClz: 'border-none bg-fill-default h-60',
};

const spanClz = 'bg-success h100';
const spanClz2 = 'bg-error h100';

const columns = [
    { name: '姓名', value: 'name' },
    { name: '年龄', value: 'age' },
    { name: '性别', value: 'gender' },
];
const list = [
    {
        id: 1,
        name: '张三三',
        age: '15',
        gender: '男',
    },
    {
        id: 2,
        name: '张小小',
        age: '18',
        gender: '女',
    },
    {
        id: 3,
        name: '张张张',
        age: '25',
        gender: '男',
    },
];
```
