<template>
  <view
    :class="[clz.root(), className, `border-${radius}`]"
    class="border-none"
    :style="{ width: width }"
  >
    <button
      :class="[
        clz.append('body'),
        bodyClazz,
        `border-${radius}`,
        `font-${theme.fontSize}`,
        `height-${size}`,
        `color-${theme.color}`,
        disabled ? `bg-${theme.bg}-disabled` : `bg-${theme.bg}`,
      ]"
      class="border-clear border-none flex-center plr-d"
      :hover-start-time="10"
      :hover-stay-time="10"
      :hover-class="hoverClass || `bg-${theme.bg}-hover`"
      @click="$emit('click', index)"
    >
      <sl-icon v-if="icon.name" v-bind="icon" className="pr-xxs" />
      <slot />
    </button>
  </view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-button';
  const clz = useClassName(ComponentName);

  // will be valid from vue 3.3+
  // defineOptions({ name: ComponentName });

  defineProps(props);
  defineEmits(['click']);
</script>
