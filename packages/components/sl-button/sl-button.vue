<template>
  <view
    :class="[clz.root(), className, `radius-${radius}`, { 'inline-block': type === 'text' }]"
    class="border-none"
    :style="{ width: _theme.width }"
  >
    <button
      :class="[
        clz.body(),
        bodyClazz,
        _theme.paddingClz,
        _theme.borderClz,
        `radius-${radius}`,
        `height-${_theme.size}`,
        `font-${_theme.fontSize}`,
        `color-${_theme.color}`,
        { 'opacity-disabled disabled': disabled },
        `bg-${_theme.bg}`,
      ]"
      class="flex-center lh-0"
      :data-set="dataSet"
      :disabled="disabled"
      :open-type="openType"
      :hover-start-time="10"
      :hover-stay-time="10"
      hover-class="opacity-disabled"
      @click="handleClick($event)"
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
    switch (_props.type) {
      case 'text':
        return {
          bg: 'transparent',
          color: _props.color || 'primary',
          fontSize: 'content',
          borderClz: 'border-none',
          paddingClz: 'p-all-xxs',
          width: 'fit-content',
          size: 'none',
        };
      case 'plain':
        return {
          bg: _props.bg || 'white',
          color: _props.color || 'primary',
          fontSize: 'content',
          borderClz: 'border border-thick ' + (_props.color || 'primary'),
          paddingClz: _props.paddingClz || 'plr-s',
          width: _props.width || 'auto',
          size: _props.size || 'button-default',
        };
      default:
        return {
          bg: _props.bg || 'primary',
          color: _props.color || 'white',
          fontSize: 'content',
          borderClz: 'border-none',
          paddingClz: _props.paddingClz || 'plr-s',
          width: _props.width || 'auto',
          size: _props.size || 'button-default',
        };
    }
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

  const handleClick = debounce((event: any) => {
    _emits('click', event);
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
