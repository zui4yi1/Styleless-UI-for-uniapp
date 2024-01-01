# sl-form 表单组件

零代码的表单组件, 使用 json 配置的 scheme 方式。集 detail 与 form 一体。注意，原则上只能使用 json 模式, 不可在`sl-form`内嵌`sl-form-item`

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz |
| :-------: | :---: | :---: | :----: | :---: | :---: | :-----: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; |  &Chi;  |

### 其它属性

|   属性    |           类型           | 默认     | 描述                                                |
| :-------: | :----------------------: | :------- | :-------------------------------------------------- |
| lableSpan |          number          | 6        | label 的宽度, 栅格模式                              |
|  detail   |          object          | {}       | 详情, 可用作表单的初始值                            |
|   dicts   | {propName:{label,value}} | {}       | 所有相关数据字典的集合                              |
|   mode    |       form/detail        | form     | form 或 detail 模式                                 |
|  itemClz  |          string          | ''       | 透传到 sl-form-item 的类名                          |
| errorClz  |          string          | ''       | 验证错误时的样式                                    |
| useEffect |         Function         | () => {} | 表单变化事件, 后续改为 onFormChange, 可用于处理联动 |
|  scheme   |       IFormGroup[]       | []       | json 配置, 详见下面                                 |

#### scheme 的 json 配置

```
/** sl-form-item的属性, 大部分都是非必填 */
interface IFormItem {
  prop: string; // 表单的属性名
  label: string; // 标签名
  type: string; // 组件名, 若是自定义组件则isCustom需为true
  isCustom?: boolean; // 是否自定义组件
  labelSpan?: number; // 标签宽度, 栅格模式, 若为0则不显示标签
  readOnly?: boolean; // 是否只读, 此时该项会自动转为详情模式, 而非disabled模式
  isRemove?: boolean; // 是否在表单中移除, 注意dom和form内都会移除
  isHidden?: boolean; // 是否隐藏, 只是dom不显示, 但form有值
  layout?: 'x' | 'y'; // 表单项是横向或纵向布局
  xLayoutClz?: string; // 横向布局时的flex布局方式, 可取flex-XXX等值
  emptyText?: string; // 无数据时, detail的缺省值
  itemAlign?: 'left' | 'right'; // 非标签而是值的对齐方向, flex级的左右对齐方向
  rules?: IValidtorRule[]; // 验证rule
  compOps?: Record<string, any>; // 组件的内置参数，注意以上的都是作用于sl-form-item, comOps是作用于如sl-input的属性
}

/** sl-form的属性 */
interface IFormGroup {
  groupName?: string; // 分组名, 如果有则可用slot设置标题的样式
  list: IFormItem[]; // form-item项
}
```

### 插糟

|     名称     | 参数  | 描述                                                    |
| :----------: | :---: | ------------------------------------------------------- |
|    header    | title | 即 groupName 参数值, 表单可能是分组的, 各组都有标题, 故 |
| 自定义组件名 |       | 直接按以下方式实现即可                                  |

```
<!--注意组件名内的短横线'-'在具名插糟内转为下划线'_'-->

<template #your_cus_com="scope">
    <your-cus-com v-bind="scope" />
</template>
```

### 事件

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 方法

|     名称     | 参数 | 描述                             |
| :----------: | :--: | -------------------------------- |
| validateForm |  无  | 验证表单                         |
|   getForm    |  无  | 获取表单值                       |
|    reset     |  无  | 重置                             |
| setPropValue |  无  | 手动修改表单值(联动时使用)       |
|  getInitVal  |  无  | 获取初始值, 用于对比表单是否修改 |

### 示例

#### template:

```
<sl-form
    ref="formRef"
    mode="form"
    :scheme="scheme"
    :detail="detail"
    :dicts="dicts"
    :useEffect="useEffect"
>
    <template #your_cus_com="scope">
        <your-cus-com v-bind="scope" />
    </template>
</sl-form>

```

#### js

```
  const formRef = ref<any>(null);
  const dicts = useDicts();
  const detail = useDetail();
  onMounted(async () => {
    scheme.value = formScheme();
  });

  const useEffect = async (field: string, val: any) => {
    if (field === 'gender') {
      // 移除节点
      // scheme.value[0].list[3].isRemove = val === 2;
      if (val === 2) {
        formRef.value.setPropValue('advantage', 1);
      } else {
        formRef.value.setPropValue('advantage', 0);
      }
    }
    if (field === 'advantage') {
      if (val === 0) {
        formRef.value.setPropValue('hobits', [0, 3]);
      } else {
        formRef.value.setPropValue('hobits', [1, 2]);
      }
    }
  };
```
