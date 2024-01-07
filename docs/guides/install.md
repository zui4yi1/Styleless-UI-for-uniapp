# 安装

### 1. 安装库

```
yarn add styleless-ui-for-uniapp
```

### 2. 引入到项目

采用 uniapp 的 easyCom 方式, 在`pages.json`的根结点增加:

```
"easycom": {
    "autoscan": true,
    "custom": {
        "^sl-(.*)": "styleless-ui-for-uniapp/components/sl-$1/sl-$1.vue"
    }
}
```

### 3. 编绎并引入项目的样式

通过`style-component-compiler` 编绎生成你的样式文件
必须导入的三个文件:

- `ui-common.css` 公共样式
- `ui-fragment.css` 原子样式
- `ui-typings.d.ts` 原子样式对应的 ts 类型

### 4. 导入 iconfont 字体文件

若无，可先使用本 ui 库自带的, 只是非常少

### 5. ts 引入类型定义

在`tsconfig.json`的属性`types`列表, 新增`styleless-ui-for-uniapp/types`

### 6. 必须安装的四个 vscode 插件

- `Vue Language Features (Volar)` 这个是 vue3 开发必须的, 同时还必须禁用 vue2 的 vetur
- `TypeScript Vue Plugin (Volar)` vue3 对应的 ts 插件
- `IntelliSense for CSS class names in HTML` styleless 写样式的神器, 实现样式的 autocomplete 自动提示功能
- `CSS Navigation` 查看样式的神器, 可显示样式定义，或转到样式定义的地方

注意, 本 UI 库已实现组件属性的 autocomplete 自动完成功能: 即在使用组件的时候, 可提示有哪些参数及类型, 并且输入时还有自动完成功能。

若你的 vscode 无此功能, 请检查`TypeScript Vue Plugin (Volar)`与`Vue Language Features (Volar)`的版本。一些版本是有问题的。当前可用的版本都是`v1.8.27`(这两个是一样的, 需保持一致)
