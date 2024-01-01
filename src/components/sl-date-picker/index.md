# sl-date-picker 日期组件

使用 dayjs 开发, 格式化参考 dayjs 即可

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz |
| :-------: | :---: | :---: | :----: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|      属性      |        类型        | 默认                                                     | 描述                                                              |
| :------------: | :----------------: | :------------------------------------------------------- | :---------------------------------------------------------------- |
|      open      |      boolean       | false                                                    | 是否打开弹窗, 须使用 v-model:open 双向绑定方式                    |
|     title      |       string       | ''                                                       | 弹窗标题                                                          |
|     value      |       string       | ''                                                       | string 格式的日期, 必须使用 v-model:value 的方式使用              |
|      mode      | date/datetime/time | `date`                                                   | 日期模式, 暂时只有纯 date 模式                                    |
|     field      |  year/month/date   | `date`                                                   | 列模式,year 只有年, month 年月, date 年月日                       |
|     start      |       string       | ''                                                       | string 格式的起始日期, 无则默认前 80 年的年初                     |
|      end       |       string       | ''                                                       | string 格式的结束日期, 无则默认后 10 年的年末                     |
|     format     |       string       | `YYYY-MM-DD  `                                           | 日期格式                                                          |
| pickViewHeight |       string       | `uni.upx2px(68)+px`                                      | 必须使用 uni.upx2px 转成 px 格式, 直接使用 rpx 会有小数导致不居中 |
|  indicatorClz  |       string       | `text-center border-line-light border-top border-bottom` | 选中项的类                                                        |
| indicatorStyle |       string       | `height: uni.upx2px(68)+px`                              | 必须使用 uni.upx2px 转成 px 格式                                  |

### 插糟

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 事件

|  名称  | 参数 | 描述                                                |
| :----: | :--: | --------------------------------------------------- |
| change | date | string 格式的选中结果, value 已双向绑定, 一般用不到 |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

#### template:

```
<sl-date-picker v-model:open="open" v-model:value="val" title="请选择" />
```

#### js

```
const open = ref(false);
const val = ref('2023-08-05');
```
