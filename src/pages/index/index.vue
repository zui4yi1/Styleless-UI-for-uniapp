<template>
  <view class="plr-l">
    <view>
      <text>bbb</text>
    </view>
    <view class="flex">
      <text>确定</text>
      <sl-icon />
      <sl-icon color="primary" />
      <sl-icon size="48" />

      <sl-icon name="loading" className="spin" />
    </view>
    <sl-button :icon="{ name: 'icon_add' }">
      <view>确定</view>
    </sl-button>
    <sl-button className="mt-d">
      <sl-icon className="pr-xxs" />
      <view>确定</view>
    </sl-button>
    <sl-card className="mt-d">aaaa</sl-card>

    <sl-row className="mt-d">
      <sl-col><view class="bg-primary h-88">第一个</view></sl-col>
      <sl-col><view class="bg-disabled h-88">第二个</view></sl-col>
      <sl-col><view class="bg-primary h-88">第三个</view></sl-col>
      <sl-col><view class="bg-line-default h-88">第四个</view></sl-col>
      <sl-col>
        <sl-card className=" h-88">第一个</sl-card>
      </sl-col>
    </sl-row>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  // eslint-disable-next-line no-unused-vars

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const title = ref('Hello');
</script>
