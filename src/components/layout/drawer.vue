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
            drawerMenuItemIndex.some((i) => i === index)
        }"
      >
        <div
          :class="{
            'flex w-full items-center justify-start rounded-xl p-2 font-bold transition duration-100 ease-in-out': true,
            'bg-gray-200 text-gray-800 shadow-lg': drawerMenuItem.href === $route.path,
            'hover:scale-110 hover:bg-gray-200 hover:text-gray-800 hover:shadow-lg':
              !drawerMenuItem.children && !drawerMenuItem.children?.length
          }"
        >
          <div
            :class="{
              'mr-3 flex h-6 w-6 items-center justify-center ': true,
              'rounded bg-gray-800 text-white shadow-xl':
                (drawerMenuItem.children &&
                  drawerMenuItem.children.length &&
                  drawerMenuItem.children.some((item) => item.href === $route.path)) ||
                drawerMenuItem.href === $route.path
            }"
          >
            <el-icon :size="drawerMenuItem.size">
              <component :is="getIcon(drawerMenuItem.icon)" />
            </el-icon>
          </div>
          <component
            :is="drawerMenuItem.children && drawerMenuItem.children.length ? 'span' : 'router-link'"
            :to="drawerMenuItem.href"
            class="flex flex-1 items-center justify-between"
          >
            <div class="drawer__menu__item__title" @click="handleToggleMenuItem(index)">
              {{ drawerMenuItem.lang }}
            </div>
            <arrow-right-icon
              v-if="drawerMenuItem.children && drawerMenuItem.children.length"
              :class="{
                'drawer__menu__item__arrow transition-all hover:rounded-full hover:bg-gray-200': true,
                'rotate-[-90deg]': true,
                'rotate-[0deg]': drawerMenuItemIndex.some((i) => i === index)
              }"
              @click.prevent="handleToggleMenuItem(index)"
            />
          </component>
        </div>
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

const drawerMenuItemIndex = ref<Array<number>>([]);

const handleToggleMenuItem = (index: number) => {
  const flag = drawerMenuItemIndex.value.some((i) => i === index);
  if (flag) {
    drawerMenuItemIndex.value = [...drawerMenuItemIndex.value].filter((i) => i !== index);
    return;
  }
  drawerMenuItemIndex.value.push(index);
};

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
        transition: 0.2s
        &:hover
          transform: scale(1.05)

.disabled-link
  pointer-events: none
</style>
