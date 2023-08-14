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
    <sl-radio :list="list" v-model:value="radioValue" />
    <sl-checkbox :list="list" v-model:value="chkboxValues" />
    <sl-checkbox direction="y" :list="list2" v-model:value="chkboxValues2" />
  </sl-page>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const radioValue = ref('');
  const chkboxValues = ref([]);
  const chkboxValues2 = ref([]);
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
  const list2 = [
    {
      label:
        '国国国男国国国国男国国国国男国国国国男国国国国男国国国国男国国国国男国国国国男国国国国男国国国国男国',
      value: 'aa',
    },
    {
      label: 'bbbb',
      value: 'bb',
    },
  ];
</script>
