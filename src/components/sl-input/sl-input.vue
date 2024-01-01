<template>
  <view :class="[clz.root(), className, 'w100']">
    <!--body-->
    <view :class="clz.body()" class="flex">
      <view
        :class="[
          clz.join('body', 'container'),
          paddingClz,
          borderClz,
          `radius-${radius}`,
          `bg-${bg}`,
        ]"
        class="flex flex-grow font-title color-content"
      >
        <sl-icon v-if="leftIcon.name?.length > 0" v-bind="leftIcon" @click="handleClickLeft" />
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
          :class="[clz.join('body', 'wrap'), type === 'textarea' ? 'flex-top' : 'flex']"
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
            class="flex-grow border-none"
            :value="value"
            :placeholder="placeholder"
            :placeholderStyle="placeholderStyle"
            :disabled="disabled"
            :maxlength="maxlength"
            :fixed="fixed"
            :focus="focus"
            :cursorSpacing="cursorSpacing"
            :SelectionStart="SelectionStart"
            :SelectionEnd="SelectionEnd"
            :style="{ ...Object.assign({ height: height, width: 'auto', ...styleObj }) }"
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
            :placeholderStyle="placeholderStyle"
            :disabled="disabled"
            :maxlength="maxlength"
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
          <view v-if="showClear && focus && value.toString().length > 0" class="ml-xs flex-inline">
            <sl-icon v-bind="clearIcon" @click="handleClear" />
          </view>
          <view v-if="type === 'password'" class="ml-xs flex-inline">
            <sl-icon
              :name="showPassword ? eyeIcon.showEye : eyeIcon.closeEye"
              v-bind="eyeIcon"
              @click="showPassword = !showPassword"
            />
          </view>
        </view>
      </view>
      <!--right-->
      <view v-if="suffix || $slots.right" :class="[clz.right()]" class="flex-shrink ml-xs">
        <slot name="right">
          <text :class="[clz.join('body', 'right', 'text'), suffixClz]">{{ suffix }}</text>
        </slot>
      </view>
    </view>
    <!--foot-->
    <!--表单类都要有foot, 用于验证提示那些-->
    <view :class="[clz.foot()]">
      <slot name="validate" />
      <slot name="foot" />
    </view>
  </view>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-input';
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
  import { useInput } from './useInput';

  const _props = defineProps(props);
  const _emits = defineEmits([
    'update:value',
    'input',
    'focus',
    'blur',
    'change',
    'confirm',
    'onLeft',
    'clear',
  ]);
  const {
    showPassword,
    focus,
    handleFocus,
    handleBlur,
    handleInput,
    handleClear,
    handleClickLeft,
  } = useInput(_props, _emits);
</script>
