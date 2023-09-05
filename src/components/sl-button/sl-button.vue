<template>
  <view
    :class="[clz.root(), className, `radius-${radius}`]"
    class="border-none"
    :style="{ width: width }"
  >
    <button
      :class="[
        clz.body(),
        bodyClazz,
        `radius-${radius}`,
        `height-${size}`,
        `font-${_theme.fontSize}`,
        `color-${_theme.color}`,
        { 'opacity-disabled disabled': disabled },
        `bg-${_theme.bg}`,
      ]"
      class="flex-center plr-s"
      :disabled="disabled"
      :hover-start-time="10"
      :hover-stay-time="10"
      :hover-class="hoverClass || `bg-${_theme.bg}-hover`"
      @click="$emit('click', index)"
    >
      <sl-icon v-if="_icon.name" v-bind="_icon" />
      <slot />
    </button>
  </view>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import { useClassName } from '../../hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-button';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);
  defineEmits(['click']);

  const _theme = computed(() => {
    return {
      bg: _props.theme.bg || _props.bg || 'primary',
      color: _props.theme.color || _props.color || 'white',
      fontSize: _props.theme.fontSize || 'content',
      borderClz: _props.theme.borderClz || 'border-none',
    };
  });

  const _icon = computed(() => {
    return Object.assign(
      {
        className: 'mr-xs',
        iconLib: 'sl-ui-common',
        bg: 'primary' as IColor,
        size: 32,
        color: 'white' as IColor,
      },
      _props.icon,
    );
  });
</script>
