<template>
  <sl-page title="标题标题">
    <sl-dropdown :isScroll="false">
      <sl-dropdown-item title="城市" :list="columns" v-model:value="val" />
      <sl-dropdown-item title="县城" :list="columns" v-model:value="vals" mutilple />
      <sl-dropdown-item title="销量" type="text" />
      <sl-dropdown-item title="价格" type="sort" />
    </sl-dropdown>
  </sl-page>
  <sl-bottom>
    <sl-button>提交</sl-button>
  </sl-bottom>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const val = ref('age');
  const vals = ref([]);

  const columns = [
    {
      value: 'label',
      label: '名字',
    },
    {
      value: 'age',
      label: '年龄',
    },
    {
      value: 'gender',
      label: '性别',
    },
  ];
  const list = [
    {
      label: '张三',
      age: 12,
      gender: '男',
    },
    {
      label: '张三222',
      age: 22,
      gender: '男',
    },
    {
      label: '张三444',
      age: 3,
      gender: '女',
    },
  ];

  const open = ref(false);
</script>
