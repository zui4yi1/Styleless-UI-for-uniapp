<template>
  <s-page title="sl-form" className="plr-l">
    <Brief desc="">
      <view>不再需要管理表单的状态</view>
      <view>scheme纯配置, 与数据分离</view>
      <view>完善的注册机制, 移除节点数据也会移除, 确保表单数据干净</view>
      <view>完善的数据初始化机制</view>
      <view>字典与数据支持响应性</view>
      <view>完善的reset机制</view>
      <view>更简洁的validtor与rules设计</view>
      <view>支持副作用effect, 即change勾子, 可用于处理联动</view>
    </Brief>
    <Tip title="测试" />
    <sl-form
      ref="formRef"
      mode="form"
      :scheme="scheme"
      :detail="detail"
      :dicts="dicts"
      :useEffect="useEffect"
    />
    <div class="flex-between">
      <sl-button width="240rpx" @click="handleSubmit">提交</sl-button>
      <sl-button width="240rpx" bg="error" @click="handleReset">重置</sl-button>
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
  import SPage from '../_components/s-page/index.vue';
  import Tip from '../_components/tip/index.vue';

  import type { IFormGroup } from '@/components/sl-form/_props';
  import { formScheme } from './_scheme';
  import { useDetail, useDicts } from './_useDataHook';

  const formRef = ref<any>(null);

  const scheme = ref<IFormGroup[]>([]);
  const dicts = useDicts();
  const detail = useDetail();

  const formData = ref(null);

  const useEffect = async (field: string, val: any) => {
    if (field === 'gender') {
      scheme.value[0].list[3].isHidden = val === 2;
      // scheme.value[0].list[3].isRemove = val === 2;
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

  onMounted(async () => {
    scheme.value = formScheme();
  });
</script>
