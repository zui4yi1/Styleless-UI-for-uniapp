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
        disabled ? `bg-${_theme.bg}-disabled` : `bg-${_theme.bg}`,
      ]"
      class="border-none flex-center plr-d"
      :hover-start-time="10"
      :hover-stay-time="10"
      :hover-class="hoverClass || `bg-${_theme.bg}-hover`"
      @click="$emit('click', index)"
    >
      <sl-icon v-if="icon.name" v-bind="icon" className="pr-xxs" />
      <slot />
    </button>
  </view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { computed } from 'vue';
  import { props } from './_props';

  const ComponentName = 'sl-button';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);
  defineEmits(['click']);

  const defaultTheme = {
    bg: 'primary' as IColor,
    borderColor: 'none' as IColor,
    fontSize: 'content' as IFont,
    color: 'white' as IColor,
    hasBorder: false,
    borderThick: false,
  };

  const _theme = computed(() => {
    return Object.assign({}, defaultTheme, _props.theme);
  });
</script>
