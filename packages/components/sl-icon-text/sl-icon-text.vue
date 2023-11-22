<template>
  <view class="flex-top" :class="[clz.root(), className]">
    <!--solve line break problem-->
    <view :class="[clz.body()]" class="flex-center flex-shrink">
      <sl-icon
        :name="name"
        :iconLib="iconLib"
        color="white"
        :size="size"
        :className="[clz.join('body', 'icon'), iconClz]"
      />
      <!--确保与右侧label同高-->
      <text>&nbsp;</text>
    </view>
    <view v-if="label.length > 0" :class="[clz.join('body', 'text'), labelClz]" class="ml-xxs">
      {{ label }}
    </view>
  </view>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-icon-text';
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
