<template>
  <sl-page title="标题标题">
    <!-- <sl-image
      src="https://img0.baidu.com/it/u=3222285739,3730143127&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
      width="300rpx"
      height="300rpx"
    />
    <sl-image
      src="https://img0.baidu.com/it/u=3222285739,37301431272&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
      width="300rpx"
      height="300rpx"
    />
    <view>111：{{ text }}</view>
    <sl-input v-model:value="text" /> -->
    <!-- <sl-radio :list="list" v-model:value="radioValue" />
    <sl-radio :list="list" v-model:value="radioValue" disabled />
    <sl-checkbox :list="list" v-model:value="chkboxValues" disabled />
    <sl-checkbox direction="y" :list="list2" v-model:value="chkboxValues2" />
    <switch :checked="s" />
    <sl-switch v-model:value="s" disabled />
    <sl-switch v-model:value="s" /> -->
    <view class="shadow-default rect-100 border"></view>
    <!-- <sl-tabs :list="listTabs" className="mt-d" />
    <sl-tabs :list="listTabs" :isScroll="false" className="mt-d" /> -->

    <!-- <sl-select v-model:open="open" title="请选择" :list="list2" /> -->
    <!-- <sl-action-sheet v-model:open="open" title="请选择" :list="actionSheetList" />

     -->
    <sl-button @click="open = true">打开</sl-button>

    <sl-table>
      <sl-tr>
        <sl-td bg="primary">
          <view>aaaaa</view>
          <view>cccc</view>
          <view>dddd</view>
        </sl-td>
        <sl-td bg="white">
          <view>1111</view>
          <view>222</view>
        </sl-td>
        <sl-td bg="primary">
          <view>aaaaa</view>
          <view>cccc</view>
          <view>dddd</view>
          <view>eeee</view>

          <view>ffff</view>
        </sl-td>
      </sl-tr>
      <sl-tr>
        <sl-td bg="disabled">
          <view>1111</view>
          <view>222</view>
        </sl-td>
        <sl-td bg="primary">
          <view>aaaaa</view>
          <view>cccc</view>
          <view>dddd</view>
        </sl-td>
      </sl-tr>
    </sl-table>
    <sl-select :list="list" v-model:open="open" title="请选择" v-model:value="value" />
  </sl-page>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const open = ref(false);
  const value = ref('');

  // const s = ref(false);
  // const radioValue = ref('');
  // const chkboxValues = ref([]);
  // const chkboxValues2 = ref([]);
  const list = [
    {
      label: 'aaaa',
      value: 'aa',
    },
    {
      label: '国国国',
      value: 'kk',
    },
    {
      label:
        '国国国男国国国国男国国国国男国国国国男国国国国男国国国国男国国国国男国国国国男国国国国男国国国国男国',
      value: 'bb',
    },
    {
      label: 'cccc',
      value: 'cc',
    },
    {
      label: 'dddd',
      value: 'dd',
    },
    {
      label: 'eeee',
      value: 'ee',
    },
    {
      label: 'ffff',
      value: 'ff',
    },
    {
      label: 'gggg',
      value: 'gg',
    },
  ];
  // const list2 = [
  //   {
  //     label:
  //       '国国国男国国国国男国国国国男国国国国男国国国国男国国国国男国国国国男国国国国男国国国国男国国国国男国',
  //     value: 'aa',
  //   },
  //   {
  //     label: 'bbbb',
  //     value: 'bb',
  //   },
  // ];

  const actionSheetList = [
    {
      text: '编辑',
      color: 'primary',
    },
    {
      text: '删除',
      value: 'error',
    },
  ];
  // const listTabs = 'abc'.split('').map((s) => {
  //   return {
  //     name: s.repeat(4),
  //     count: 5,
  //   };
  // });
</script>
