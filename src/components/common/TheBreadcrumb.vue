<template>
  <n-breadcrumb>
    <n-breadcrumb-item v-for="item of breadcrumbs" :key="item.name">
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { type Breadcrumb } from '@/router/WorkbenchRoutes';
const route = useRoute();
const breadcrumbs = route.meta.breadcrumbs as Breadcrumb[];
</script>
