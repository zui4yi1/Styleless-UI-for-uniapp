<template>
  <view v-show="isHidden !== true" :class="[clz.root(), className]">
    <view :class="[clz.body(), layout === 'x' ? xLayoutClz : 'block']" class="ptb-s">
      <view
        v-if="labelSpan"
        :class="[clz.join('body', 'label'), `span-${labelSpan}`]"
        class="flex-shrink ptb-xxs"
      >
        <text
          class="color-error mr-xxs"
          v-if="form_es.mode.value === 'form' && rules?.some((item) => item.required)"
        >
          *
        </text>
        <text class="text">{{ label }}</text>
      </view>
      <view
        :class="[
          clz.join('body', 'value'),
          `flex-${itemAlign}`,
          { 'border border-error ': inValidateText.length },
          { [errorClz]: inValidateText.length },
        ]"
        class="flex-grow"
      >
        <!--只读的展示-->
        <template v-if="form_es.mode.value === 'detail' || readOnly">
          <text v-if="type === 'sl-input'">{{ itemVal || emptyText }}</text>
          <text v-else-if="type === 'sl-select'">{{ valueLabel(itemVal) }}</text>
          <text v-else-if="type === 'sl-picker'">
            {{ [null, '', undefined].includes(itemVal as any) ? '' : treeLabels(itemVal) }}
          </text>
          <text v-else-if="type === 'sl-date-picker'">
            {{ [null, '', undefined].includes(itemVal as any) ? '' : itemVal }}
          </text>
          <text v-else-if="type === 'sl-radio'">{{ valueLabel(itemVal) }}</text>
          <text v-else-if="type === 'sl-checkbox'">{{ valuesLabels(itemVal as any[]) }}</text>
          <text v-else-if="type === 'sl-switch'">
            {{ [undefined, null, ''].includes(itemVal) ? emptyText : itemVal }}
          </text>
          <slot
            v-else-if="isCustom"
            name="cus_com"
            mode="detail"
            :value="itemVal"
            :cusChange="handleCusChange"
            v-bind="_compOps"
          />
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
              {{
                [null, '', undefined].includes(itemVal as any) || !itemVal?.length
                  ? '请选择'
                  : valueLabel(itemVal)
              }}
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
          <template v-else-if="type === 'sl-picker'">
            <view @click="open = true" class="flex-inline">
              {{
                [null, '', undefined].includes(itemVal as any) || !itemVal?.length
                  ? '请选择'
                  : treeLabels(itemVal)
              }}
              <sl-icon name="icon_arrow_right" :size="32" />
            </view>
            <sl-picker
              v-model:open="open"
              v-model:value="itemVal"
              title="请选择"
              :list="_list"
              v-bind="_compOps"
              @change="change"
            />
          </template>
          <template v-else-if="type === 'sl-date-picker'">
            <view @click="open = true" class="flex-inline">
              {{
                [null, '', undefined].includes(itemVal as any) || !itemVal?.length
                  ? '请选择'
                  : itemVal
              }}
              <sl-icon name="icon_arrow_right" :size="32" />
            </view>
            <sl-date-picker
              v-model:open="open"
              v-model:value="itemVal"
              title="请选择"
              v-bind="_compOps"
              @change="change"
            />
          </template>
          <slot
            v-if="isCustom"
            name="cus_com"
            mode="form"
            :value="itemVal"
            :cusChange="handleCusChange"
            v-bind="_compOps"
          />
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

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-form-item';
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
  import { props } from './_props';

  import { computed, inject, isRef, ref, watchEffect } from 'vue';
  import { injectPropHook } from './_useInjectPropHook';
  import { getInitVal } from './_util';
  import { validatorExecutor } from './_validate';

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
      return _props.compOps.type !== 'textarea'
        ? Object.assign({ borderClz: 'border-none' }, _props.compOps)
        : _props.compOps;
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

  const valuesLabels = (vals: any[]) => {
    if (!vals || !(vals instanceof Array)) return _props.emptyText;
    return (
      (_list.value as any[])
        .filter((t: any) => vals.includes(t.value))
        .map((v: any) => v.label)
        .join(',') || _props.emptyText
    );
  };

  const valueLabel = (value: any) => {
    if (_props.compOps.multiple) return valuesLabels(value);
    return (_list.value as any[]).find((t: any) => t.value === value)?.label || _props.emptyText;
  };
  const _treeData = (list: any[], vals: any[], labels: string[] = []): string[] => {
    if (vals.length === 0) return [];
    const tmpVal = vals.shift();
    const inx = list.findIndex((t) => t.value === tmpVal) || 0;
    if (inx === -1) {
      return labels;
    } else {
      labels.push(list[inx]?.label || '');
    }
    // 如果是最后一个则终止迭代
    if (vals.length === 0) {
      return labels;
    }
    return _treeData(list[inx]?.children || [], vals, labels);
  };
  const treeLabels = (vals: any[]) => {
    if (!vals?.length) return '';
    const res = _treeData(((_list.value as any[]) || []).slice(0), vals.slice(0), []);
    return res?.join(',') || '';
  };

  const change = (val: string) => {
    validator();
    _emits('change', val);
  };

  const handleCusChange = (val: any) => {
    itemVal.value = val;
    change(val);
  };

  const reset = (val: any) => {
    itemVal.value = val;
  };
  const setValue = async (val: any) => {
    itemVal.value = val;
    await validator();
    change(val);
  };

  defineExpose({
    prop: _props.prop,
    reset,
    setValue,
    validator,
  });
</script>
