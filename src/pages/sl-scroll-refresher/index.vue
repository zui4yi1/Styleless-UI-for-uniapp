<template>
  <view style="height: 400px">
    <sl-scroll-refresher :fetchDataFunc="fetchDataFunc">
      <view>aaa</view>
    </sl-scroll-refresher>
  </view>
</template>
<script setup lang="ts">
  const fetchDataFunc = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          total: 11,
          list: [
            {
              id: 11,
              name: 'aa',
            },
          ],
        });
      }, 2000);
    });
  };
</script>
