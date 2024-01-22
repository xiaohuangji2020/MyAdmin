<template>
  <div>
    workbench
    <div class="test1">
      <div class="test2"></div>
    </div>
    <to-do-list></to-do-list>
  </div>
</template>

<script lang="ts" setup>
import ToDoList from '@/views/workbench/components/ToDoList.vue';
</script>

<style lang="postcss" scoped>
.test1 {
  display: block;
  width: 200px;
  height: 200px;
  background-color: lightblue;

  .test2 {
    width: 100px;
    height: 100px;
    background-color: bisque;
  }
}
</style>
