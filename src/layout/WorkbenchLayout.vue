<template>
  <div>
    <n-layout embedded position="absolute">
      <n-layout-header bordered class="header">哪都通快递OA</n-layout-header>
      <n-layout has-sider embedded position="absolute" style="top: 60px; bottom: 0">
        <n-layout-sider collapse-mode="width" :collapsed-width="50" :width="200" bordered show-trigger="bar">
          <the-menu></the-menu>
        </n-layout-sider>
        <n-layout-content embedded content-style="padding: 20px;">
          <div class="card">
            <router-view></router-view>
          </div>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </div>
</template>

<script setup lang="ts">
import TheMenu from '@/components/common/TheMenu.vue';
</script>

<style lang="postcss" scoped>
.common-layout {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.header {
  height: 60px;
  font-weight: bold;
  font-size: 20px;
  line-height: 60px;
}
</style>
