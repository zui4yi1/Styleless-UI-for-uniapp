<template>
  <s-page title="sl-form" className="plr-l">
    <Brief desc="" className="hidden">
      <!-- <view class="bold">加强版的form组件, 结合并加强了element-ui与formily双方的优点:</view>
      <view>1. 无需再维护表单状态, 只用ref</view>
      <view>2. scheme纯配置, 与数据分离，更方便初始化与复用</view>
      <view>3. 完善的注册机制, 移除节点数据也会移除, 确保表单数据干净</view>
      <view>4. 完善的reset机制, 响应式数据也可初始化, 编辑时可用</view>
      <view>5. 更简洁的validtor与rules设计</view>
      <view>6. 支持副作用useEffect, 即change勾子, 可用于处理联动</view>
      <view>7. 支持detail与form两种机制, 一份代码, 即可达成详情与表单的操作</view> -->
    </Brief>
    <Tip title="加强版form组件" desc="性别与爱好是联动的, 提交后可观察表单值的差异" />
    <sl-form
      ref="formRef"
      :mode="mode"
      :scheme="scheme"
      :detail="detail"
      :dicts="dicts"
      :useEffect="useEffect"
    >
      <template #cus_com="scope">
        <CusCom v-bind="scope" />
      </template>
    </sl-form>
    <div class="flex-right">
      <sl-button width="160rpx" className="mr-l" @click="handleSubmit">提交</sl-button>
      <sl-button width="160rpx" className="mr-l" bg="error" @click="handleReset">重置</sl-button>
      <sl-button width="200rpx" bg="success" @click="handleToggle">详情/表单</sl-button>
    </div>
    <sl-card className="mt-d">
      <div>表单值:</div>
      <div>{{ formData }}</div>
    </sl-card>
    <sl-fill-line isBottom size="button-default" />
  </s-page>
</template>
<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import Brief from '../_components/brief/index.vue';
  import CusCom from '../_components/cus-com/index.vue';
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  import type { IFormGroup } from '@/components/sl-form/_props';
  import { formScheme } from './_scheme';
  import { useDetail, useDicts } from './_useDataHook';

  const formRef = ref<any>(null);
  const mode = ref('form');

  const scheme = ref<IFormGroup[]>([]);
  const dicts = useDicts();
  const detail = useDetail();

  const formData = ref(null);

  const useEffect = async (field: string, val: any) => {
    if (field === 'gender') {
      // 移除节点
      // scheme.value[0].list[3].isRemove = val === 2;
      if (val === 2) {
        formRef.value.setPropValue('advantage', 1);
      } else {
        formRef.value.setPropValue('advantage', 0);
      }
    }
    if (field === 'advantage') {
      if (val === 0) {
        formRef.value.setPropValue('hobits', [0, 3]);
      } else {
        formRef.value.setPropValue('hobits', [1, 2]);
      }
    }
  };

  const handleSubmit = async () => {
    // 注意得用Promise方式校验
    const isValid = await formRef.value.validateForm();
    if (!isValid) return;
    formData.value = formRef.value.getForm();
  };

  const handleReset = () => {
    formRef.value.reset();
  };

  const handleToggle = () => {
    mode.value = mode.value === 'form' ? 'detail' : 'form';
  };

  onMounted(async () => {
    scheme.value = formScheme();
  });
</script>
