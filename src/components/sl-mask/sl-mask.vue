<template>
  <view
    :class="[clz.root(), className, open ? 'z-index-mask  opacity-1' : 'z-index-hide  opacity-0']"
    class="fixed abs-full mask-default transition-fast"
    hover-stop-propagation
    @tap="closeOnTab && $emit('update:open', false)"
    @touchmove.stop.prevent="() => {}"
  >
    <view
      :class="[clz.body(), `abs-${mode}`]"
      class="absolute"
      :style="animateCss"
      @click.stop="() => {}"
    >
      <slot />
    </view>
  </view>
</template>
<script setup lang="ts">
  import { computed, type CSSProperties } from 'vue';
  import { useClassName } from '../../hooks/use-class-name';
  import { props } from './_props';

  const ComponentName = 'sl-mask';
  const clz = useClassName(ComponentName);

  const _props = defineProps(props);
  defineEmits(['update:open']);

  const animateCss = computed<CSSProperties>(() => {
    const { open, mode, width } = _props;
    let cssPro = {} as CSSProperties;
    switch (mode) {
      case 'right':
        cssPro = {
          transform: open ? 'translateX(0)' : 'translateX(100%)',
        };
        break;
      case 'left':
        cssPro = {
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
        };
        break;
      case 'top':
        cssPro = {
          transform: open ? 'translateY(0)' : 'translateY(-100%)',
        };
        break;
      case 'center':
        cssPro = {
          transform: open ? 'scale(1) translate(-50%, -50%)' : 'scale(0.1) translate(-50%, -50%)',
          'transform-origin': '0 100%',
          width,
        };
        break;
      default:
        cssPro = {
          transform: open ? 'translateY(0)' : 'translateY(100%)',
        };
    }
    return Object.assign(
      {
        transition: 'transform 0.25s ease-out',
      },
      cssPro,
    );
  });
</script>
