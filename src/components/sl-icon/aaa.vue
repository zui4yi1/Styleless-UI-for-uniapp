<template>
  <view :class="[className, 'flex-inline-center']">
    <view
      :class="[fontFamily, `${fontFamily}-${name}`, `color-${color}`, 'flex-inline ']"
      :style="{ fontSize: `${size}rpx` }"
    ></view>
  </view>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'n-icon',
    props: {
      className: { type: [String, Array], default: '' },
      fontFamily: { type: String, default: 'common-icon' },
      name: { type: String, default: 'icon_check' },
      size: { type: [String, Number], default: '36' },
      color: { type: String, default: 'primary' },
    },
    setup() {
      return {};
    },
  });
</script>
<style lang="scss"></style>
