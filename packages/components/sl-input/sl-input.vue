<template>
  <view :class="[clz.root(), className]" class="flex">
    <!--body-->
    <view
      :class="[clz.body(), paddingClz, borderClz, `radius-${radius}`, `bg-${bg}`]"
      class="flex flex-grow font-title color-content"
    >
      <sl-icon v-if="leftIcon.name?.length > 0" v-bind="leftIcon" />
      <view
        v-if="prefix || $slots.prefix"
        :class="[clz.join('body', 'prefix')]"
        class="flex-shrink mr-xs"
      >
        <slot name="prefix">
          <text :class="[clz.join('body', 'prefix', 'text'), prefixClz]">{{ prefix }}</text>
        </slot>
      </view>

      <view
        :class="[clz.join('body', 'wrap'), type === 'textarea' ? 'flex-plain' : 'flex']"
        class="flex-grow"
      >
        <textarea
          v-if="type === 'textarea'"
          :class="[
            clz.join('body', 'wrap', 'textarea'),
            `font-${fontSize}`,
            `text-${align}`,
            `color-${disabled ? 'disabled' : color}`,
          ]"
          class="flex-grow border-none w100"
          :value="value"
          :placeholder="placeholder"
          :placeholderStyle="placeholderStyle"
          :disabled="disabled"
          :maxlength="maxlength"
          :fixed="fixed"
          :focus="focus"
          :confirmType="confirmType"
          :cursorSpacing="cursorSpacing"
          :SelectionStart="SelectionStart"
          :SelectionEnd="SelectionEnd"
          :style="{ ...Object.assign({ height: height, ...styleObj }) }"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput"
          @confirm="$emit('confirm', ($event as any).detail.value)"
        />
        <input
          v-else
          :class="[
            clz.join('body', 'wrap', 'input'),
            `height-${heightSize}`,
            `font-${fontSize}`,
            `text-${align}`,
            `color-${disabled ? 'disabled' : color}`,
          ]"
          class="flex-grow border-none"
          :type="type === 'password' ? 'text' : type"
          :value="value"
          :password="type === 'password' && !showPassword"
          :placeholder="placeholder"
          :disabled="disabled"
          :maxlength="maxlength"
          :focus="focus"
          :confirmType="confirmType"
          :cursorSpacing="cursorSpacing"
          :SelectionStart="SelectionStart"
          :SelectionEnd="SelectionEnd"
          :style="styleObj"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput"
          @confirm="$emit('confirm', ($event as any).detail.value)"
        />
        <view v-if="showClear && focus && value.length > 0" @tap="handleClear">
          <sl-icon v-bind="clearIcon" />
        </view>
      </view>
    </view>
    <!--right-->
    <view :class="[clz.right()]" class="flex-shrink">
      <slot name="right" />
    </view>
  </view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';

  import { props } from './_props';
  import { useInput } from './useInput';

  const ComponentName = 'sl-row';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);
  const _emits = defineEmits(['update:value', 'input', 'focus', 'blur', 'change']);
  const { showPassword, focus, handleFocus, handleBlur, handleInput, handleClear } = useInput(
    _props,
    _emits,
  );
</script>