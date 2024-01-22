<template>
  <div>
    <n-layout embedded position="absolute">
      <n-layout-header bordered class="header">哪都通快递OA</n-layout-header>
      <n-layout has-sider embedded position="absolute" style="top: 60px; bottom: 0">
        <n-layout-sider bordered class="aside">
          菜单
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

<style lang="postcss" scoped>
.common-layout {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.header {
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  font-weight: bold;
}
</style>
