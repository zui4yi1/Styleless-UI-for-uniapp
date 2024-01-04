<template>
  <s-page title="sl-scroll-refresher" :hasBottom="false">
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
  </s-page>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];

  interface IList {
    name: string;
    age: number;
  }

  const list = ref([] as IList[]);

  const strs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const fetchDataFunc = async (
    pager: { pageNum: number; pageSize: number; total: number },
    type: 'new' | 'append',
  ) => {
    const tmp = [] as IList[];

    const { pageNum, pageSize, total } = pager;

    new Array(20).fill('').forEach((val, inx) => {
      if (tmp.length < total - (pageNum - 1) * pageSize) {
        const rd = Math.floor(Math.random() * 26);
        tmp.push({
          name: val + '名字: ' + strs[rd].repeat(3),
          age: (pageNum - 1) * pageSize + inx + 1,
        });
      }
    });

    if (type === 'new') {
      list.value = [];
    }
    list.value.push(...tmp);

    return {
      total: 23,
    };
  };
</script>
