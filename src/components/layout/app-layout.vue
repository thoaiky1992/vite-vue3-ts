<template>
  <el-container class="bg-slate-50 dark:bg-slate-800 dark:text-white">
    <el-aside
      :class="{
        'drawer z-50 h-screen w-80 bg-white shadow-xl dark:bg-slate-600 dark:shadow-white': true,
        hide
      }"
    >
      <drawer />
    </el-aside>
    <el-container>
      <el-header class="border-0 bg-white px-0 shadow-md dark:bg-slate-600">
        <app-bar v-model="hide" />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import AppBar from '@/components/layout/app-bar.vue';
import Drawer from '@/components/layout/drawer.vue';
import { provide, ref } from 'vue';

const hide = ref<boolean>(false);

provide('toggleDrawer', () => (hide.value = !hide.value));
</script>
<style>
.drawer {
  opacity: 1;
  transition: opacity 0.5s, width 0.1s;
}
.drawer.hide {
  opacity: 0;
  width: 0px;
}
</style>
