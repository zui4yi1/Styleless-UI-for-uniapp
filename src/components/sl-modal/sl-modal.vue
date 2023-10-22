<template>
  <sl-mask v-model:open="isOpen" :closeOnTab="closeOnTab" mode="center">
    <view :class="[clz.root(), className]">
      <sl-card paddingClz="p-all-none" :hasShadow="false">
        <view class="plr-l">
          <view v-if="hasTitle" :class="[clz.head()]" class="height-cell-default flex">
            <view class="font-title flex-grow">{{ title }}</view>
            <view v-if="hasClose" class="flex-shrink flex flex-right w-80" @click="isOpen = false">
              <sl-icon name="icon_close" :size="40" />
            </view>
          </view>
          <view :class="[clz.body()]" class="pb-d">
            <slot />
          </view>
        </view>

        <view v-if="hasFoot" :class="[clz.foot()]" class="flex-center pb-xs">
          <view v-if="hasCancel" class="flex-grow">
            <sl-button
              radius="none"
              :theme="{ bg: 'white', color: 'placeholder' }"
              @click="isOpen = false"
            >
              {{ cancelText }}
            </sl-button>
          </view>
          <view v-if="hasConfirm" class="flex-grow">
            <sl-button
              radius="none"
              :theme="{ bg: 'white', color: 'content' }"
              @click="handleConfirm"
            >
              {{ confirmText }}
            </sl-button>
          </view>
        </view>
      </sl-card>
    </view>
  </sl-mask>
</template>

<script lang="ts">
  import { useClassName } from '../../hooks/use-class-name';
  const ComponentName = 'sl-modal';
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
  import { computed } from 'vue';
  import { props } from './_props';

  const _props = defineProps(props);
  const _emits = defineEmits(['update:open', 'confirm']);

  const isOpen = computed({
    get() {
      return _props.open;
    },
    set(value) {
      _emits('update:open', value);
    },
  });

  const handleConfirm = () => {
    _emits('update:open', false);
    _emits('confirm');
  };
</script>
