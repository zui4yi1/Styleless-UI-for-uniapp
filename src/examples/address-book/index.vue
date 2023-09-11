<template>
  <s-page title="sl-address-book" className="plr-l" :hasBottom="false">
    <Brief desc="一款简洁又自由的通讯录组件。" />
    <Tip title="默认">
      <view>高度: 会自动撑到底部, 也可传入固定的值</view>
      <view>标题: 提供headClz可修改风格, 也可使用插糟</view>
      <view>项: 无默认, 只能使用插糟</view>
      <view>事件: 无，插糟内直接定义即可</view>
    </Tip>
    <sl-address-book :list="list" className="mt-d">
      <template #index_item="{ item }">
        <view class="h-64 flex-between">
          <view>{{ item.name }}</view>
        </view>
      </template>
    </sl-address-book>
  </s-page>
</template>
<script setup lang="ts">
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];

  const list = [
    {
      firstLetter: 'A',
      list: [
        {
          name: '阿强',
          age: 18,
        },
        {
          name: '敖拜',
          age: 16,
        },
        {
          name: '傲天',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'B',
      list: [
        {
          name: '百里守约',
          age: 18,
        },
        {
          name: '毕加索',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'C',
      list: [
        {
          name: '陈陈',
          age: 18,
        },
        {
          name: '辰辰',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'D',
      list: [
        {
          name: '狄大人',
          age: 18,
        },
        {
          name: '杜十娘',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'E',
      list: [
        {
          name: '鄂小妹',
          age: 18,
        },
      ],
    },
    {
      firstLetter: 'F',
      list: [
        {
          name: '方清雪',
          age: 18,
        },
        {
          name: '房房',
          age: 16,
        },
        {
          name: '付付',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'G',
      list: [
        {
          name: '郭巨侠',
          age: 16,
        },
        {
          name: '巩莉',
          age: 18,
        },
        {
          name: '郭巨侠',
          age: 16,
        },
        {
          name: '古天乐',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'H',
      list: [
        {
          name: '何何',
          age: 18,
        },
        {
          name: '黄黄',
          age: 16,
        },
        {
          name: '胡胡',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'J',
      list: [
        {
          name: '江江江',
          age: 18,
        },
        {
          name: '金金金',
          age: 16,
        },
        {
          name: '贾宝玉',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'K',
      list: [
        {
          name: '孔明',
          age: 18,
        },
        {
          name: '柯镇恶',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'L',
      list: [
        {
          name: '廖廖廖',
          age: 18,
        },
        {
          name: '李李李',
          age: 16,
        },
        {
          name: '林林',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'M',
      list: [
        {
          name: '柔以升',
          age: 18,
        },
        {
          name: '孟子',
          age: 16,
        },
      ],
    },
    {
      firstLetter: 'N',
      list: [
        {
          name: '宁宁宁',
          age: 18,
        },
        {
          name: '倪倪倪',
          age: 16,
        },
      ],
    },
  ];
</script>
