# sl-space-group space 布局组件

其实就是比 flex-wrap 布局多了间距。
横向时使用 float 方式, 故所有项必须保持高度一致。
不直接使用 grid 布局是因为 grid 在小程序不兼容。

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz |
| :-------: | :---: | :---: | :----: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|   属性    |    类型     | 默认  | 描述                                                    |
| :-------: | :---------: | :---- | :------------------------------------------------------ |
|  gutter   |   string    | 16    | 横向间距, 注意不能带单位, 默认 16(rpx)                  |
| rowGutter |   string    | 0     | 纵向间距, 同 gutter 默认 0, (若为 0 实际与 gutter 相同) |
|  layout   | float/block | float | 水平或纵向                                              |

### sl-space-item 属性

### 插糟

|  名称   | 参数 | 描述     |
| :-----: | :--: | -------- |
| default |      | 任意内容 |

### 事件

| 名称  | 参数 | 描述 |
| :---: | :--: | ---- |
| click |      |      |

### 方法

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 示例

#### template:

```
    <sl-space-group>
      <sl-space-item>
        <view class="bg-primary plr-d radius-default flex-center">aaaaa</view>
      </sl-space-item>
      <sl-space-item>
        <view class="bg-primary plr-d radius-default flex-center">aaaaaaa</view>
      </sl-space-item>
      <sl-space-item>
        <view class="bg-primary plr-d radius-default flex-center">aaaaa</view>
      </sl-space-item>
      <sl-space-item>
        <view class="bg-primary plr-d radius-default flex-center">aaaaaaaa</view>
      </sl-space-item>
      <sl-space-item>
        <view class="bg-primary plr-d radius-default flex-center text">aaaaaaaaaaaaaaa</view>
      </sl-space-item>
    </sl-space-group>

    <!--checkbox和radio组件也是采用space组件实现的-->
    <sl-space-group :gutter="32" :rowGutter="12" :layout="direction === 'x' ? 'float' : 'block'">
      <sl-space-item
        v-for="(item, inx) in list"
        :key="'checkbox_' + inx"
        :className="[clz.body(), { 'opacity-disabled': disabled }]"
        @click="handleSelect(item.value)"
      >
        <sl-icon-text
          :name="iconName"
          :iconLib="iconLib"
          :label="item.label"
          :size="iconSize"
          :labelClz="labelClz"
          :iconClz="
            [
              'border',
              type === 'circle' ? 'radius-round' : '',
              (value || []).includes(item.value)
                ? 'bg-primary border-transparent'
                : 'bg-white border-line-default',
            ].join(' ')
          "
        />
      </sl-space-item>
    </sl-space-group>
```

#### js

```

```
