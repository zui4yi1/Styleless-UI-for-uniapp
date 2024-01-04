# sl-scroll-refresher 分页组件

下拉刷新、触底加载
已封装分页, 简单模式下, 仅需要实现 fetchDataFunc 这个查询数据的函数即可。

### 通用七类样式属性

| className | color |  bg   | radius | font  | size  | bodyClz  |
| :-------: | :---: | :---: | :----: | :---: | :---: | :------: |
| &#10003;  | &Chi; | &Chi; | &Chi;  | &Chi; | &Chi; | &#10003; |

### 其它属性

|       属性       |  类型   | 默认        | 描述                                                                          |
| :--------------: | :-----: | :---------- | :---------------------------------------------------------------------------- |
|  fetchDataFunc   | Promise | async/await | 查询数据的函数, 必须返回带 total 的对象, 用于控制分页。通常只要传这个参数即可 |
| refresherEnabled | boolean | true        | 是否可下拉刷新                                                                |
|     pageSize     | number  | 10          | 分页尺寸                                                                      |
|   autoLoadData   | boolean | false       | 页面挂载后是否自动查询数据                                                    |
|    isLoadMore    | boolean | true        | 是否触底后自动加载                                                            |
|   showSuccTip    | boolean | true        | 是否下拉刷新成功后显示刷新成功                                                |
|  showNoMoreTip   | boolean | true        | 是否显示没有更多数据                                                          |
|     totalMap     | string  | total       | total 字段映射                                                                |
|    threshold     | number  | 50          | 下拉时的距离达到多少触发刷新功能                                              |

### 插糟

|   名称    | 参数 | 描述                                   |
| :-------: | :--: | -------------------------------------- |
| top_area  |      | 顶部不随滚动的固定区域, 一般是查询区域 |
| load_icon |      | 下拉时的转圈圈提示                     |
|  default  |      | 列表区域                               |

### 事件

| 名称 | 参数 | 描述 |
| :--: | :--: | ---- |
|  无  |      |      |

### 方法

|   名称    | 参数 | 描述                             |
| :-------: | :--: | -------------------------------- |
| resetData |      | 重置分页并查询(注意查询条件不改) |
| initPager |      | 初始化分页                       |

### 示例

#### template:

```
    <sl-scroll-refresher autoLoadData :fetchDataFunc="fetchDataFunc" :pageSize="20">
      <Brief
        desc="基于scroll-view的下拉刷新+触底加载的列表组件, 内部集成了分页、提示、进入页面自动加载等功能"
      />
      <Tip
        title="试试按住页面, 往下拉"
        desc="由于内部集成了分页, 故取数的api接口需返回一个async的包含total属性的对象"
      />

      <sl-card v-for="item in list" :key="item.age" borderClz="" bg="fill-light" className="mt-d">
        <view class="flex-between">
          <view>{{ item.name }}</view>
          <view>{{ item.age }}</view>
        </view>
      </sl-card>
    </sl-scroll-refresher>
```

#### js

```
  const fetchDataFunc = async (pager, type: 'new' | 'append' ) => {
    const { pageNum, pageSize } = pager;
    const params = {pageNum, pageSize}
    const res = await queryAPI(params)
    if (type === 'new') {
      list.value = [];
    }
    list.value.push(...res);
    return res
  };
```
