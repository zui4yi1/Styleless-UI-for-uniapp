<template>
  <view
    :class="[clz.root(), className]"
    class=""
    :style="{ paddingTop: type === 'inline' ? 0 : `${top}rpx` }"
  >
    <view :class="[clz.body(), `bg-${bg}`, type === 'inline' ? 'flex-center' : 'flex-column']">
      <sl-icon />
      <slot>
        <text :class="[clz.join('body-content')]" class="color-placeholder font-title">
          {{ content }}
        </text>
      </slot>
    </view>
  </view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-empty';
  const clz = useClassName(ComponentName);

  defineProps(props);
</script>
