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
      :data-set="dataSet"
      :disabled="disabled"
      :open-type="openType"
      :hover-start-time="10"
      :hover-stay-time="10"
      :hover-class="hoverClass || `bg-${_theme.bg}-hover`"
      @click="handleClick(index, $event)"
      @getphonenumber="getPhonenumber"
      @openSetting="openSetting"
      @getUserInfo="getUserInfo"
    >
      <sl-icon v-if="_icon.name" v-bind="_icon" />
      <slot />
    </button>
  </view>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-button';
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
  import { debounce } from 'lodash-es';
  import { computed } from 'vue';
  import { props } from './_props';

  const _props = defineProps(props);
  const _emits = defineEmits(['click', 'getPhonenumber', 'openSetting', 'getUserInfo']);

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

  const handleClick = debounce((inx: number, event: any) => {
    _emits('click', inx, event);
  }, 300);

  const getPhonenumber = (res: any) => {
    _emits('getPhonenumber', res);
  };
  const getUserInfo = (res: any) => {
    _emits('getUserInfo', res);
  };
  const openSetting = (res: any) => {
    _emits('openSetting', res);
  };
</script>
