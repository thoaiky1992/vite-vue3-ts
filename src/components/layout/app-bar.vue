<template>
  <div class="flex h-14 w-full items-center justify-start">
    <div class="flex h-10 w-20 items-center justify-center px-4">
      <span
        :class="{
          'flex h-8 w-8 cursor-pointer items-center justify-center transition-all delay-75 duration-200 hover:rounded-full hover:bg-gray-200 hover:shadow-sm': true,
          'rotate-[180deg]': modelValue
        }"
        @click="toggleDrawer"
      >
        <el-icon size="25">
          <arrow-left-bold />
        </el-icon>
      </span>
    </div>
    <div class="flex-1 cursor-pointer" @click="toggleDarkMode">toggle dark mode</div>
  </div>
</template>
<script setup lang="ts">
import { inject, ref, toRefs } from 'vue';
import { ArrowLeftBold } from '@element-plus/icons-vue';

defineProps({
  modelValue: { type: Boolean, required: true }
});

const toggleDarkMode = () => {
  document.querySelector('html')?.classList.toggle('dark');
};

const toggleDrawer: any = inject('toggleDrawer');
</script>
