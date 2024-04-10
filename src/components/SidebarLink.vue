<template>
    <RouterLink
      :to="toDestination"
      class="flex items-center px-4 py-2 text-sm font-medium transition-colors duration-150 rounded-md"
      :class="isActive ? 'bg-gray-200 text-black' : 'text-gray-600 hover:bg-gray-100'"
    >
    <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white">
      <slot name="icon"></slot>
      <span class="ml-3 text-black"><slot></slot></span>
    </div>
    </RouterLink>
</template>

<script setup>
import {useRouter } from 'vue-router'
import { defineProps, computed } from 'vue'

const props = defineProps({
  routeName: String
});

const router = useRouter();
let currentRouteName = useRouter().currentRoute

let isActive = computed(()=> {
  return currentRouteName.value.name == props.routeName;
});

const toDestination = computed(() => {
  const route = router.getRoutes().find(r => r.name === props.routeName);
  return route ? { name: props.routeName } : '/';
});
</script>
