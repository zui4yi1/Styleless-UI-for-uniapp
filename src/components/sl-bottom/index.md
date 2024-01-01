# sl-bottom 底部组件

fixed 布局的底部组件

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz |
| :-------: | :---: | :---: | :----: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|  属性   |  类型  | 默认          | 描述            |
| :-----: | :----: | :------------ | :-------------- |
| rootClz | string | `plr-l ptb-d` | 根结点 dom 样式 |

### 插糟

|  名称   | 参数 | 描述                                                                                                                         |
| :-----: | :--: | ---------------------------------------------------------------------------------------------------------------------------- |
| default |  无  | 一般是放按钮比较多。 注意：底部为避免遮挡内容，通常需要使用空行组件来填充:<br/>`<sl-fill-line isBottom className="ptb-d" />` |

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
<sl-fill-line isBottom className="ptb-d" />
<sl-bottom>
    <view class="bg-success color-white h-88 plr-l flex">
    通知、查询、profile等场景常需要置顶。。。
    </view>
</sl-bottom>
```
