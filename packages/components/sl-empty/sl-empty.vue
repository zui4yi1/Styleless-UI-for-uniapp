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
      :name="iconName"
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

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-empty';
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

  defineProps(props);
</script>
