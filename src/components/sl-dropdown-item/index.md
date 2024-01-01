# sl-dropdown-item 筛选组件的项

即插即拔模式, 即`sl-dropdown`选项是通过 `sl-dropdown-item` 自身控制的, `sl-dropdown`本身无 list 参数

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz |
| :-------: | :---: | :---: | :----: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|   属性   |             类型              | 默认     | 描述                                                              |
| :------: | :---------------------------: | :------- | :---------------------------------------------------------------- |
|   type   | select/cascade/date/sort/text | select   | 选项类型                                                          |
|  title   |            string             | ''       | 弹窗标题                                                          |
| maxWidth |            string             | '160rpx' | 每项的最大宽度, 若是日期要手动设置 200rpx 左右                    |
|  value   |        string/string[]        | ''       | select, cascade 或 date 可传, 使用时必须使用 v-model:value 的形式 |
|   list   |    {label,value,children}     | []       | 数据列, select 或 cascade 可传                                    |
| mutilple |            boolean            | false    | 是否可多选, select 时传                                           |
|  hasAll  |            boolean            | false    | 是否自动添加"全部"选项, type 为 cascade 时可传                    |

### 插糟

|     名称      |  参数  | 描述                  |
| :-----------: | :----: | --------------------- |
| customSelect  | labels | 自定义如何展示 labels |
| customCascade | labels | 自定义如何展示 labels |

### 事件

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 方法

|  名称  | 参数 | 描述         |
| :----: | :--: | ------------ |
| select | val  | 选中后的结果 |

### 示例

见`sl-dropdown`
