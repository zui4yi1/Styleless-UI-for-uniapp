# sl-image 图片组件

单张, 如果是带上传的, 直接用 sl-upload-image

### 通用七类样式属性

| className | color |    bg    |  radius  | font  | size  | bodyClz |
| :-------: | :---: | :------: | :------: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &#10003; | &#10003; | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|        属性         |  类型   | 默认            | 描述                     |
| :-----------------: | :-----: | :-------------- | :----------------------- |
|         src         | string  | ''              | 图片路径                 |
|        mode         | string  | 'aspectFill'    | 填充模式                 |
|        width        | string  | 100%            | 带单位                   |
|       height        | string  | 100%            | 带单位                   |
|      lazyLoad       | boolean | true            | 是否懒加载               |
| showMenuByLongpress | boolean | true            | 是否长按显示菜单         |
|       iconLib       | string  | sl-ui-common    | iconfont 类名            |
|     loadingIcon     | string  | icon_image      | 加载图标时的图标名       |
|      errorIcon      | string  | icon_image_fail | 加载失败时的图标名       |
|     showLoading     | boolean | true            | 加载图标时是否显示转圈圈 |
|      showError      | boolean | true            | 加载失败时是否失败图     |
|       preview       | boolean | false           | 是否可预览               |

### 插糟

|  名称   | 参数 | 描述           |
| :-----: | :--: | -------------- |
| loading |      | 自定义 loading |
|  error  |      | 自定义 error   |

### 事件

| 名称  | 参数 | 描述                         |
| :---: | :--: | ---------------------------- |
| click |      | preview 为 true 时会阻止冒泡 |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

#### template:

```

    <view class="rect-200 mt-d">
      <sl-image
        preview
        src="https://img0.baidu.com/it/u=3021883569,1259262591&fm=253&fmt=auto&app=120&f=JPEG?w=1140&h=641"
      />
    </view>

   <sl-image
      className="mt-d"
      src="https://img0.baidu.com/it/u=3021883569,1259262591&fm=253&fmt=auto&app=120&f=JPEG?w=1140&h=641"
      width="200rpx"
      height="200rpx"
      radius="round"
    />

```

#### js

```

```
