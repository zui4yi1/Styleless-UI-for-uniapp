# sl-top 顶部组件

在顶部固定一块区域, fixed 定位

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz  |
| :-------: | :---: | :---: | :----: | :---: | :---: | :------: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; | &#10003; |

### 其它属性

|        属性        |  类型   | 默认 | 描述                                                                                  |
| :----------------: | :-----: | :--- | :------------------------------------------------------------------------------------ |
|   isCustomNavBar   | boolean | true | 导航栏是否为自定义组件, 除了 webview 模式, 一般都为 true                              |
| customNavBarHeight | Number  | 88   | isCustomNavBar 为 true 时使用。自定义导航栏的高度, 作用于 top, 避免遮挡了自定义导航栏 |

### 插糟

|  名称   | 参数 | 描述     |
| :-----: | :--: | -------- |
| default |      | 任意内容 |

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
   <sl-top>
      <view class="bg-success color-white h-88 plr-l flex">
        通知、查询、profile等场景常需要置顶。。。
      </view>
    </sl-top>

```
