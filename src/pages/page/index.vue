<template>
  <sl-page title="标题标题">
    <sl-table className="mt-d" custom>
      <sl-tr>
        <sl-td>
          <view>aaaadddda</view>
        </sl-td>
        <sl-td>
          <view>1111</view>
        </sl-td>
      </sl-tr>
      <sl-tr>
        <sl-td>
          <sl-table>
            <sl-tr>
              <sl-td>
                <view>1111</view>
                <view>222</view>
              </sl-td>
              <sl-td>
                <view>1111</view>
                <view>222</view>
              </sl-td>
            </sl-tr>
            <sl-tr>
              <sl-td>
                <view>1111</view>
                <view>222</view>
              </sl-td>
              <sl-td>
                <view>1111</view>
                <view>222</view>
              </sl-td>
            </sl-tr>
          </sl-table>
        </sl-td>
        <sl-td>
          <view>aaaaa</view>
          <view>cccc</view>
          <view>dddd</view>
        </sl-td>
      </sl-tr>
    </sl-table>
    <sl-table :columns="columns" :list="list" />
    <sl-mask v-model:open="open" mode="center">
      <view class="h-120 bg-white">aaaaaa</view>
    </sl-mask>
    <sl-button @click="open = true">打开</sl-button>
    <sl-button bg="error">打开</sl-button>
    <sl-button bg="warning">打开</sl-button>
    <sl-button bg="success">打开</sl-button>
    <sl-button disabled>打开</sl-button>
    <sl-button disabled bg="error">打开</sl-button>
    <sl-button disabled bg="warning">打开</sl-button>
    <sl-button disabled bg="success">打开</sl-button>
  </sl-page>
  <sl-bottom>
    <sl-button>提交</sl-button>
  </sl-bottom>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const columns = [
    {
      value: '名字',
      name: 'name',
    },
    {
      value: '年龄',
      name: 'age',
    },
    {
      value: '性别',
      name: 'gender',
    },
  ];
  const list = [
    {
      name: '张三',
      age: 12,
      gender: '男',
    },
    {
      name: '张三222',
      age: 22,
      gender: '男',
    },
    {
      name: '张三444',
      age: 3,
      gender: '女',
    },
  ];

  const open = ref(false);
</script>
