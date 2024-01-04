# sl-line 细线组件

主要用来做分割线, 自带细线效果

### 通用七类样式属性

| className |  color   |  bg   | radius | font  | size  | bodyClz |
| :-------: | :------: | :---: | :----: | :---: | :---: | :-----: |
| &#10003;  | &#10003; | &Chi; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|    属性     |  类型   | 默认  | 描述                          |
| :---------: | :-----: | :---- | :---------------------------- |
| borderWidth | string  | 1px   | 边框厚度                      |
|  direction  | string  | x     | 方向 x 或 y                   |
|   length    | string  | 100%  | 长度或高度，视 direction 方向 |
| isHairLine  | boolean | true  | 是否细线                      |
|  lineStyle  | string  | solid | 线的风格                      |

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
 <sl-line color="primary"  />
 <sl-line direction="y" length="60rpx" :isHairLine="false" />
```
