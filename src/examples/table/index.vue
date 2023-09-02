<template>
  <s-page title="sl-table" className="plr-l">
    <Brief
      desc="支持两种模式, 标签及json, 默认为json, custom为true则为标签模式。可任意自定义表头和单元格的样式"
    />
    <Tip title="标签模式" desc="custom=true, 使用sl-th,sl-tr,sl-td进行布局" />
    <sl-table custom cellspacing="2rpx" :tableProps="tableProps" className="mt-d">
      <sl-th>
        <sl-td v-for="item in columns" :key="item.value" :tdClz="tableProps.thClz">
          {{ item.name }}
        </sl-td>
      </sl-th>
      <sl-tr v-for="(ls, inx) in list" :key="'tr_' + inx">
        <sl-td v-for="item in columns" :key="`${ls.id}${item.value}`">
          {{ (ls as any)[item.value] }}
        </sl-td>
      </sl-tr>
    </sl-table>

    <Tip title="json模式" desc="columns和list" className="mt-d" />
    <sl-table
      :tableProps="tableProps"
      cellspacing="2rpx"
      :columns="columns"
      :list="list"
      className="mt-d"
    />

    <Tip
      title="跨行与跨列"
      desc="只能使用custom模式, 且只能采用td内嵌table的方式实现, 并且最好不要有单元格间距及边框"
      className="mt-d"
    />
    <sl-table :tableProps="tableProps" custom className="mt-d">
      <sl-tr>
        <sl-td>aaaa</sl-td>
        <sl-td :tdClz="spanClz">bbbb</sl-td>
      </sl-tr>
      <sl-tr>
        <sl-td>cccc</sl-td>
        <sl-td>
          <sl-table custom :tableProps="tableProps">
            <sl-tr>
              <sl-td>aaaa</sl-td>
              <sl-td>bbbb</sl-td>
            </sl-tr>
          </sl-table>
        </sl-td>
      </sl-tr>
      <sl-tr>
        <sl-td>aaaa</sl-td>
        <sl-td :tdClz="spanClz2">bbbb</sl-td>
      </sl-tr>
    </sl-table>
    <sl-table :tableProps="tableProps" custom className="mt-d">
      <sl-tr>
        <sl-td>aaaa</sl-td>
        <sl-td>bbbb</sl-td>
        <sl-td>cccc</sl-td>
      </sl-tr>
      <sl-tr>
        <sl-td tdClz=" ">
          <sl-table custom :tableProps="tableProps">
            <sl-tr>
              <sl-td>aaaa</sl-td>
            </sl-tr>
            <sl-tr>
              <sl-td>aaaa</sl-td>
            </sl-tr>
          </sl-table>
        </sl-td>
        <sl-td :tdClz="spanClz">bbbb</sl-td>
        <sl-td :tdClz="spanClz2">cccc</sl-td>
      </sl-tr>
      <sl-tr>
        <sl-td>aaaa</sl-td>
        <sl-td>bbbb</sl-td>
        <sl-td>cccc</sl-td>
      </sl-tr>
    </sl-table>
  </s-page>
</template>
<script setup lang="ts">
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];

  const tableProps = {
    thClz: 'bg-primary h-72',
    tdClz: 'border-none bg-fill-default h-60',
  };

  const spanClz = 'bg-success h100';
  const spanClz2 = 'bg-error h100';

  const columns = [
    { name: '姓名', value: 'name' },
    { name: '年龄', value: 'age' },
    { name: '性别', value: 'gender' },
  ];
  const list = [
    {
      id: 1,
      name: '张三三',
      age: '15',
      gender: '男',
    },
    {
      id: 2,
      name: '张小小',
      age: '18',
      gender: '女',
    },
    {
      id: 3,
      name: '张张张',
      age: '25',
      gender: '男',
    },
  ];
</script>
