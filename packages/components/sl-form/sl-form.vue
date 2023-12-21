<template>
  <view :class="[clz.root(), className]">
    <view
      v-for="(g, inx) in scheme"
      :key="'group_' + inx"
      :class="[clz.join('body', 'group'), g.groupName]"
    >
      <slot v-if="g.groupName" name="header" :title="g.groupName" />
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
  import { computed, nextTick, provide, reactive, ref, toRaw, watch, watchEffect } from 'vue';
  import { props } from './_props';

  const childRefs = ref([]);

  const _props = defineProps(props);
  defineEmits(['submit', 'reset']);

  const form = reactive({} as any);
  const _mode = computed(() => _props.mode);
  provide('form_es', { form, mode: _mode });

  const initData = ref<any>({});

  /** 监听初始值, 并处理useEffect */
  watchEffect(() => {
    const _detail = JSON.parse(JSON.stringify(_props.detail || {}));
    initData.value = _detail;
  });

  /** 见鬼的, 要转为watch来监听initData */
  watch(
    () => initData.value,
    (val) => {
      Object.keys(val).forEach((key) => {
        _props.useEffect(key, val[key]);
      });
    },
  );

  const handleChange = (field: string, val: any) => {
    _props.useEffect(field, val, form);
  };

  const setPropValue = (prop: string, val: any) => {
    const targetRef: any = childRefs.value.find((t: any) => t.prop === prop);
    nextTick(() => {
      targetRef.setValue(val);
    });
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
      _props.useEffect(prop, initData.value[prop]);
    });
  };

  defineExpose({
    validateForm,
    getForm,
    reset,
    setPropValue,
    initData: toRaw(initData.value),
  });
</script>
