# sl-search 查询组件

自带放大镜, 自动查询, 由防抖控制, 0.2 秒

### 通用七类样式属性

| className | color |    bg    |  radius  | font  | size  | bodyClz |
| :-------: | :---: | :------: | :------: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &#10003; | &#10003; | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|     属性     |  类型   | 默认  | 描述                             |
| :----------: | :-----: | :---- | :------------------------------- |
|    value     | string  | ''    | 双向绑定                         |
| isAutoSearch | boolean | true  | 是否自动查询, 由防抖控制, 0.2 秒 |
|  paddingClz  | string  | plr-d | 原生 input 与边框的间距          |
|  borderClz   | string  | none  | 边框样式                         |
|   leftIcon   | string  | {}    | 左图标对象, 完整的 sl-icon 参数  |

### 插糟

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 事件

|  名称  | 参数 | 描述     |
| :----: | :--: | -------- |
| search | val  | 查询事件 |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

#### template:

```
    <sl-search v-model:value="val" />
    <sl-search v-model:value="val" bg="fill-default" className="mt-d" />
    <div class="p-all-l bg-fill-default mt-d">
      <sl-search v-model:value="val" />
    </div>
```
