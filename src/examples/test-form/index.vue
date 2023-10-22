<template>
  <s-page title="test-form" className="plr-l">
    <Brief desc="XXXX" />
    <Tip title="测试" />
    <sl-atom-form ref="testFormRef" :scheme="scheme" />
    <view class="flex-between">
      <sl-button width="160rpx" bg="primary" @click="handleCreate">新建</sl-button>
      <sl-button width="160rpx" bg="warning" @click="handleDetail">详情</sl-button>
      <sl-button width="160rpx" bg="error">编辑</sl-button>
      <sl-button width="160rpx" bg="success">取值</sl-button>
    </view>
  </s-page>
</template>
<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { type IFormScheme } from '../../components/sl-atom-form/_props';
  import Brief from '../_components/brief/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';
  import { formScheme } from './_scheme';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themes = ['primary', 'success', 'error'];

  const testFormRef = ref(null);

  const scheme = ref([] as IFormScheme);

  const details = ref({} as any);
  const hobits = ref([] as any[]);

  const _data = {
    name: '张三',
    age: '10',
    gender: 1,
    hobits: [1, 2],
  };

  const getDetail = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(_data);
      }, 1000);
    });
  };

  const getHobits = () => {
    return new Promise<any[]>((resolve) => {
      setTimeout(() => {
        resolve([
          {
            label: '数学',
            value: 1,
          },
          {
            label: '语言',
            value: 2,
          },
        ]);
      }, 300);
    });
  };

  const handleCreate = async () => {
    const genders = [
      { label: '男', value: 1 },
      { label: '女', value: 2 },
    ];
    scheme.value = formScheme({}, { hobits, genders });
  };

  const handleDetail = async () => {
    const genders = [
      { label: '男', value: 1 },
      { label: '女', value: 2 },
    ];

    scheme.value = formScheme(details, { hobits, genders });
  };

  onMounted(async () => {
    // details.value = _data;
    handleDetail();
    details.value = await getDetail();

    hobits.value = await getHobits();
  });
</script>
