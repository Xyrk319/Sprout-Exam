<template>
    
<aside id="separator-sidebar" class="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li v-for="item in sidebarItems" :key="item.title">
            <SidebarLink :routeName="item.routeName">
                <template #icon>
                    <component :is="item.iconComponent" class="w-6 h-6 text-black"/>
                </template>
                {{ item.title }}
            </SidebarLink>
         </li>
      </ul>
   </div>
</aside>
</template>

<script setup>

import { ref } from 'vue'
import SidebarLink from './SidebarLink.vue'

import { HomeIcon, UserGroupIcon } from '@heroicons/vue/24/outline'

const sidebarItems = ref([
    { 
        title: 'Dashboard', 
        routeName: 'Home',
        iconComponent: HomeIcon
    },
    {
        title: 'Employees',
        routeName: 'Employees',
        iconComponent: UserGroupIcon
    }
])
    
</script>