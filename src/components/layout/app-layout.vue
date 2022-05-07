<template>
  <el-container class="bg-slate-50 dark:bg-slate-800 dark:text-white">
    <el-aside
      :class="{
        'drawer w-68 z-50 h-screen bg-white shadow-xl dark:bg-slate-600 dark:shadow-white': true,
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
<style lang="sass">
.drawer
  transition: width 0.1s
  .drawer__menu__item__title, .drawer__menu__item__arrow
    transition: font-size 0.1s

.drawer.hide
  /* opacity: 0; */
  width: 90px
  .drawer__menu__item__title, .drawer__menu__item__arrow
    font-size: 0px !important
    display: none !important
  .drawer__menu__item
    > div
      &:first-of-type
        background-color: transparent !important
        box-shadow: none !important
    .el-icon
      width: 2em
    a
      background-color: transparent
      box-shadow: unset
    .drawer__submenu
      a
        opacity: 0
        font-size: 0px
        padding: 0rem
        margin-top: 0rem
@media (max-width: '480px')
  .drawer.hide
    width: 0px
</style>
