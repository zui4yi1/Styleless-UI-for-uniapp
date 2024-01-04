# sl-button 按钮组件

有三种模式:
theme-带主题背景色, plain-文字和边框, text-只有文字, 默认 theme

### 通用七类样式属性

| className |  color   |    bg    |  radius  | font  |   size   | bodyClz |
| :-------: | :------: | :------: | :------: | :---: | :------: | :-----: |
| &#10003;  | &#10003; | &#10003; | &#10003; | &Chi; | &#10003; |  &Chi;  |

### 其它属性

|    属性    |                    类型                     | 默认                                                                                           | 描述                                                    |
| :--------: | :-----------------------------------------: | :--------------------------------------------------------------------------------------------- | :------------------------------------------------------ |
|    type    |              theme/plain/text               | theme                                                                                          | 按钮模式                                                |
|  disabled  |                   boolean                   | false                                                                                          | 是否禁用                                                |
|   width    |                   string                    | auto                                                                                           | 需带单位                                                |
| paddingClz |                   string                    | plr-s                                                                                          | type 为 theme 或 plain 时可用, 用于配置文字与边框的间距 |
|    size    |                   IHeight                   | button-default                                                                                 | 高度类                                                  |
| hoverClass |                   string                    | ''                                                                                             | 点击颜色类, 内置统一使用 opacity-disabled               |
|    icon    |                   object                    | { name: '',\_className: 'mr-xs',iconLib: 'sl-ui-common',bg: 'primary',size: 32,color: 'white'} |                                                         |
|  openType  | none/getPhoneNumber/openSetting/getUserInfo | none                                                                                           | 小程序用的开放类型                                      |
|  dataSet   |                     any                     | null                                                                                           | 存数据                                                  |

### 插糟

|  名称   | 参数 | 描述       |
| :-----: | :--: | ---------- |
| default |  无  | 一般是文字 |

### 事件

|      名称      |   参数   | 描述               |
| :------------: | :------: | ------------------ |
|     click      |  Event   | 点击事件           |
| getPhonenumber | 见小程序 | 小程序获取手机号   |
|  openSetting   | 见小程序 | 小程序打开设置     |
|  getUserInfo   | 见小程序 | 小程序获取用户信息 |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

#### template:

```
    <sl-button bg="primary">theme按钮</sl-button>
    <sl-button type="text" color="primary">文字按钮</sl-button>
    <sl-button type="plain" color="primary">plain按钮</sl-button>
```
