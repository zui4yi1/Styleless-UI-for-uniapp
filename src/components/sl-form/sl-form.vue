<template>
  <view :class="[clz.root(), className]">
    <view
      v-for="(g, inx) in scheme"
      :key="'group_' + inx"
      :class="[clz.join('body', 'group'), g.groupName]"
    >
      <template v-for="item in g.list" :key="item.prop">
        <sl-form-item
          v-if="item.isRemove !== true"
          ref="childRefs"
          :type="item.type"
          :prop="item.prop"
          :label="item.label"
          :value="detail[item.prop]"
          :list="dicts[item.prop] || []"
          :rules="item.rules"
          :xLayoutClz="item.xLayoutClz"
          :readOnly="item.readOnly"
          :isHidden="item.isHidden"
          :compOps="item.compOps"
          @change="handleChange(item.prop, $event)"
        />
      </template>
    </view>
  </view>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-form';
  const clz = useClassName(ComponentName);
  export default {
    name: ComponentName,
    options: {
      virtualHost: true,
      inheritAttrs: false,
    },
  };
</script>

<script setup lang="ts">
  import { computed, provide, reactive, ref, toRaw, watchEffect } from 'vue';
  import { props } from './_props';

  const childRefs = ref([]);

  const _props = defineProps(props);
  defineEmits(['submit', 'reset']);

  const form = reactive({} as any);
  const _mode = computed(() => _props.mode);
  provide('form_es', { form, mode: _mode });

  const initData = ref<any>({});

  watchEffect(() => {
    initData.value = _props.detail;
  });

  const handleChange = (field: string, val: any) => {
    _props.useEffect(field, val, form);
  };

  const setPropValue = (field: string, val: any) => {
    const target: any = childRefs.value.find((t: any) => t.prop === field);
    target.setValue(val);
  };

  const validateForm = async () => {
    const count: string[][] = await Promise.all(childRefs.value.map((k: any) => k.validator()));
    const filterCount = count.filter((t) => t.length);
    return filterCount.length === 0;
  };

  const getForm = () => {
    return JSON.parse(JSON.stringify(toRaw(form)));
  };

  const reset = () => {
    childRefs.value.forEach((k: any) => {
      const prop = k.prop;
      k.reset(initData.value[prop]);
    });
  };

  defineExpose({
    validateForm,
    getForm,
    reset,
    setPropValue,
  });
</script>
