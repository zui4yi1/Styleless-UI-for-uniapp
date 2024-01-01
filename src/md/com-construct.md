# 组件的 dom 结构设计方式

### 根结点:

结点一定带有`root`和`className`

```
<view :class="[clz.root(), className]">
    // 其它结点
</view>
```

### 头身脚:

```
<view :class="[clz.root(), className]">
    <view :class=[clz.head()] />
    <view :class=[clz.body()] />
    <view :class=[clz.foot()] />
</view>
```

### 左中右

注意先包裹 body, 用于控制水平如何布局, 如使用'flex', 'flex-top','flex-bottom'

```
<view :class="[clz.root(), className]">
    <view :class=[clz.body(), 'flex'] >
        <view :class=[clz.left()] />
        <view :class=[clz.center()] />
        <view :class=[clz.right()] />
    </view>
</view>
```
