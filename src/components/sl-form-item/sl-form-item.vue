<template>
  <view v-show="isHidden !== true" :class="[clz.root(), className]">
    <view :class="[clz.body(), layout === 'x' ? xLayoutClz : 'block']" class="ptb-s">
      <view :class="[clz.join('body', 'label'), `span-${lableSpan}`]" class="flex-shrink">
        <text class="color-error mr-xxs">*</text>
        <text class="text">{{ label }}</text>
      </view>
      <view
        :class="[clz.join('body', 'value'), { 'border border-error': inValidateText.length }]"
        class="flex-grow flex-right"
      >
        <!--只读的展示-->
        <template v-if="form_es.mode.value === 'detail' || readOnly">
          <text v-if="type === 'sl-input'">{{ itemVal || emptyText }}</text>
          <text v-else-if="type === 'sl-select'">{{ valueLabel(itemVal) }}</text>
          <text v-else-if="type === 'sl-radio'">{{ valueLabel(itemVal) }}</text>
          <text v-else-if="type === 'sl-checkbox'">{{ valuesLabels(itemVal as any[]) }}</text>
          <text v-else-if="type === 'sl-switch'">
            {{ [undefined, null, ''].includes(itemVal) ? emptyText : itemVal }}
          </text>
          <text v-else>{{ itemVal || emptyText }}</text>
        </template>
        <!--表单-->
        <template v-else>
          <template v-if="type === 'sl-input'">
            <sl-input
              v-model:value="itemVal"
              @blur="validator"
              @change="change"
              v-bind="_compOps"
            />
          </template>
          <template v-else-if="type === 'sl-checkbox'">
            <sl-checkbox v-model:value="itemVal" :list="_list" v-bind="_compOps" @change="change" />
          </template>
          <template v-else-if="type === 'sl-radio'">
            <sl-radio v-model:value="itemVal" :list="_list" v-bind="_compOps" @change="change" />
          </template>
          <template v-else-if="type === 'sl-switch'">
            <sl-switch v-model:value="itemVal" @change="change" v-bind="_compOps" />
          </template>
          <template v-else-if="type === 'sl-select'">
            <view @click="open = true" class="flex-inline">
              {{ [null, '', undefined].includes(itemVal as any) ? '请选择' : valueLabel(itemVal) }}
              <sl-icon name="icon_arrow_right" :size="32" />
            </view>
            <sl-select
              v-model:open="open"
              v-model:value="itemVal"
              :list="_list"
              v-bind="_compOps"
              @change="change"
            />
          </template>
          <!-- <slot
            v-if="$slots.default"
            :type="type"
            :value="itemVal"
            v-bind="_compOps"
            @change="change"
          /> -->
        </template>
      </view>
    </view>
    <view :class="[clz.foot()]">
      <view v-if="inValidateText.length" :class="[clz.join('foot', 'error')]" class="flex-right">
        <text class="color-error">{{ inValidateText.join(', ') }}</text>
      </view>
      <view :class="[clz.join('foot', 'tip')]"></view>
    </view>
    <sl-line />
  </view>
</template>
<script setup lang="ts">
  import { props } from './_props';

  import { computed, inject, isRef, ref, watchEffect } from 'vue';
  import { useClassName } from '../../hooks/use-class-name';
  import { injectPropHook } from './_useInjectPropHook';
  import { getInitVal } from './_util';
  import { validatorExecutor } from './_validate';

  const ComponentName = 'sl-form-item';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);
  const _emits = defineEmits(['change', 'update:value']);

  const itemVal = ref(getInitVal(_props.type, _props.compInitValue));

  const open = ref(false);

  const inValidateText = ref<string[]>([]);

  const form_es = inject('form_es', {
    form: {},
    mode: { value: 'form' },
  });

  const _list = computed(() => (isRef(_props.list) ? _props.list.value : _props.list));

  const _compOps = computed(() => {
    if (_props.type === 'sl-input')
      return Object.assign({ borderClz: 'border-none', heightSize: 'auto' }, _props.compOps);
    return _props.compOps;
  });

  injectPropHook(_props.prop, itemVal, form_es.form);

  watchEffect(() => {
    if (typeof _props.value !== undefined) {
      itemVal.value = _props.value as any;
    }
  });

  const validator = async () => {
    const res = await validatorExecutor(_props.rules, itemVal.value, form_es.form);
    inValidateText.value = res;
    return res;
  };

  const valueLabel = (value: any) => {
    return (_list.value as any[]).find((t: any) => t.value === value)?.label || _props.emptyText;
  };

  const valuesLabels = (vals: any[]) => {
    if (!vals || !(vals instanceof Array)) return _props.emptyText;
    return (
      (_list.value as any[])
        .filter((t: any) => vals.includes(t.value))
        .map((v: any) => v.label)
        .join(',') || _props.emptyText
    );
  };

  const change = (val: string) => {
    validator();
    _emits('change', val);
  };

  const reset = (val: any) => {
    itemVal.value = val;
  };
  const setValue = (val: any) => {
    itemVal.value = val;
    validator();
  };

  defineExpose({
    prop: _props.prop,
    reset,
    setValue,
    validator,
  });
</script>
