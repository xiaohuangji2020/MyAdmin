<template>
  <n-menu :options="workbenchMenus"
          :root-indent="12"
          :indent="36"
          :render-label="renderMenuLabel"
          :render-icon="renderMenuIcon"></n-menu>
</template>

<script setup lang="ts">
import { h, type Component } from 'vue';
import { RouterLink } from 'vue-router';
import { NIcon, type MenuOption } from 'naive-ui';
import { workbenchMenus } from '@/router/WorkbenchRoutes';

const renderMenuLabel = (option: MenuOption) => {
  if (!option.children) {
    return h(
      RouterLink, {
        to: {
          name: option.key as string,
        },
      }, { default: () => option.label },
    );
  }

  return option.label as string;
};

const renderMenuIcon = (option: MenuOption) => {
  if (option.iconComponent) {
    return h(NIcon, null, { default: () => h(option.iconComponent as Component) });
  }

  return false;
};
</script>

<style lang="postcss" scoped>
.n-menu {
  :deep(a):hover {
    background-color: transparent;
  }
}
</style>
