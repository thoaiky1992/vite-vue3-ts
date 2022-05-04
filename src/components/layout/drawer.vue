<template>
  <div class="h-screen w-full px-6 pt-4">
    <ul class="drawer__menu flex flex-col">
      <li
        v-for="(drawerMenuItem, index) in getDrawerMenuItems"
        :key="drawerMenuItem.key"
        :class="{
          'drawer__menu__item my-2 cursor-pointer': true,
          active:
            drawerMenuItem.children &&
            drawerMenuItem.children.length &&
            drawerMenuItemIndex === index
        }"
        @click="drawerMenuItemIndex = index"
      >
        <router-link
          :to="drawerMenuItem.href"
          :class="{
            'flex w-full items-center justify-between rounded-xl p-2 font-bold transition duration-100 ease-in-out hover:scale-110 hover:bg-gray-200 hover:text-gray-800 hover:shadow-lg': true,
            'bg-gray-200 text-gray-800 shadow-lg': drawerMenuItem.href === $route.path,
            'disabled-link': drawerMenuItem.children && drawerMenuItem.children.length
          }"
        >
          <div class="flex items-center">
            <div
              :class="{
                'mr-3 flex h-6 w-6 items-center justify-center ': true,
                'rounded bg-gray-800 text-white shadow-xl':
                  drawerMenuItem.children &&
                  drawerMenuItem.children.length &&
                  drawerMenuItem.children.some((item) => item.href === $route.path)
              }"
            >
              <el-icon :size="drawerMenuItem.size">
                <component :is="getIcon(drawerMenuItem.icon)" />
              </el-icon>
            </div>
            <div>
              {{ drawerMenuItem.lang }}
            </div>
          </div>
          <arrow-right-icon
            v-if="drawerMenuItem.children && drawerMenuItem.children.length"
            :class="{
              'rotate-[-90deg]': true,
              'rotate-[0deg]': drawerMenuItemIndex === index
            }"
          />
        </router-link>
        <!-- If drawerMenuItem has children  -->
        <ul class="drawer__submenu my-1 ml-4 border-l pl-3">
          <li v-for="drawerSubmenuItem in drawerMenuItem.children" :key="drawerSubmenuItem.key">
            <router-link
              :class="{
                'mt-0 block w-full rounded-xl py-0 px-0 text-0 transition-drawer-item delay-75 duration-200 hover:scale-105 hover:bg-gray-200 hover:text-gray-800 hover:shadow-lg': true,
                ' bg-gray-200 text-gray-800 shadow-lg': drawerSubmenuItem.href === $route.path
              }"
              :to="drawerSubmenuItem.href"
            >
              {{ drawerSubmenuItem.lang }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import ArrowRightIcon from '@/components/svg/arrow-right-icon.vue';
import DashBoardIcon from '@/components/svg/dashboard-icon.vue';
import { User, SetUp, Postcard, Location, PriceTag, Star, Setting } from '@element-plus/icons-vue';
import { DrawerMenuItems } from '@/config/drawer-menu/drawer-menu';

const drawerMenuItemIndex = ref<number>(-1);

const getDrawerMenuItems = computed(() => {
  return DrawerMenuItems;
});

const getIcon = (icon: string) => {
  switch (icon) {
    case 'dash-board-icon':
      return DashBoardIcon;
    case 'user':
      return User;
    case 'set-up':
      return SetUp;
    case 'post-card':
      return Postcard;
    case 'location':
      return Location;
    case 'price-tag':
      return PriceTag;
    case 'star':
      return Star;
    case 'setting':
      return Setting;
    default:
      return User;
  }
};
</script>

<style lang="sass">
.drawer__menu__item.active
  .drawer__submenu
    & > li
      & > a
        font-size: 14px
        padding: 0.5rem
        margin-top: 0.5rem
        transform: scale(1)
        transition: 0.2s
        &:hover
          transform: scale(1.05)

.disabled-link
  pointer-events: none
</style>
