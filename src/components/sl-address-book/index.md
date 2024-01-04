# sl-address-book

通讯录列表

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz |
| :-------: | :---: | :---: | :----: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|  属性   |            类型             | 默认                 | 描述                                                                        |
| :-----: | :-------------------------: | :------------------- | :-------------------------------------------------------------------------- |
|  list   | firstLetter,list(list 任意) | []                   | 通讯录列表, 仅两个属性 firstLetter 和 list, list 属性任意由 slot 自定义实现 |
| headClz |           string            | `bold bg-fill-light` | 标题样式类                                                                  |
| height  |           string            | ''                   | 通讯录高度, 若无则自动延伸到最底部                                          |

### 插糟

|       名称        |    参数    | 描述                                                   |
| :---------------: | :--------: | ------------------------------------------------------ |
| index_item_header |   letter   | 自定义各字母标题                                       |
|      default      | index_item | 自定义各项, 注意每项都由自定义实现, 组件不提供任何风格 |

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
    <sl-address-book :list="list">
      <template #index_item="{ item }">
        <view class="h-64 flex-between">
          <view>{{ item.name }}</view>
        </view>
      </template>
    </sl-address-book>
```

#### js:

```
  const list = [
    {
      firstLetter: 'A',
      list: [
        {
          name: '阿强',
          age: 18,
        },
        {
          name: '敖拜',
          age: 16,
        },
        {
          name: '傲天',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'B',
      list: [
        {
          name: '百里守约',
          age: 18,
        },
        {
          name: '毕加索',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'C',
      list: [
        {
          name: '陈陈',
          age: 18,
        },
        {
          name: '辰辰',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'D',
      list: [
        {
          name: '狄大人',
          age: 18,
        },
        {
          name: '杜十娘',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'E',
      list: [
        {
          name: '鄂小妹',
          age: 18,
        },
      ],
    },
    {
      firstLetter: 'F',
      list: [
        {
          name: '方清雪',
          age: 18,
        },
        {
          name: '房房',
          age: 16,
        },
        {
          name: '付付',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'G',
      list: [
        {
          name: '郭巨侠',
          age: 16,
        },
        {
          name: '巩莉',
          age: 18,
        },
        {
          name: '郭巨侠',
          age: 16,
        },
        {
          name: '古天乐',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'H',
      list: [
        {
          name: '何何',
          age: 18,
        },
        {
          name: '黄黄',
          age: 16,
        },
        {
          name: '胡胡',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'J',
      list: [
        {
          name: '江江江',
          age: 18,
        },
        {
          name: '金金金',
          age: 16,
        },
        {
          name: '贾宝玉',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'K',
      list: [
        {
          name: '孔明',
          age: 18,
        },
        {
          name: '柯镇恶',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'L',
      list: [
        {
          name: '廖廖廖',
          age: 18,
        },
        {
          name: '李李李',
          age: 16,
        },
        {
          name: '林林',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'M',
      list: [
        {
          name: '柔以升',
          age: 18,
        },
        {
          name: '孟子',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'N',
      list: [
        {
          name: '宁宁宁',
          age: 18,
        },
        {
          name: '倪倪倪',
          age: 16,
        },
      ],
    },
  ];
```
