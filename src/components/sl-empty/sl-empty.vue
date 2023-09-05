<template>
  <view
    :class="[
      clz.root(),
      className,
      `bg-${bg}`,
      type === 'x' ? 'flex-center' : 'flex-column-center',
    ]"
    class="h100"
    :style="{ paddingTop: type === 'x' ? 0 : `${top}rpx` }"
  >
    <sl-icon
      name="icon_nodata"
      :color="color"
      :size="size"
      :className="type === 'x' ? 'mr-xs' : ''"
    />
    <slot>
      <text :class="[clz.join('body', 'tip'), `color-${color}`]">
        {{ content }}
      </text>
    </slot>
  </view>
</template>
<script setup lang="ts">
  import { useClassName } from '@/hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-empty';
  const clz = useClassName(ComponentName);

  defineProps(props);
</script>
