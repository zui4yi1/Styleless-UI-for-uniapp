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
  </sl-page>
</template>
<script setup lang="ts">
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
</script>
