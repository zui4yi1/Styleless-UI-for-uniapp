<template>
  <view class="w100">
    <!--演示例子-->
    <view>自定义组件</view>
    <template v-if="mode === 'form'">
      <sl-input v-model:value="curVal" />
    </template>
    <template v-else>
      <view class="flex-right">
        {{ curVal }}
      </view>
    </template>
  </view>
</template>
<script setup lang="ts">
  import { computed } from 'vue';

  /** 自定义组件的三个必要属性, 可自定义其它 */
  interface IProps {
    value: string;
    mode: 'form' | 'detail'; // 自定义组件必须实现form和detail模式, 因为sl-form是表单与详情一体的
    cusChange: any; // change事件不走emit, 直接用attr模式
  }
  const props = withDefaults(defineProps<IProps>(), {
    value: '',
    mode: 'form',
    cusChange: () => {},
  });

  const curVal = computed({
    get() {
      return props.value;
    },
    set(val) {
      props.cusChange(val);
    },
  });
</script>
