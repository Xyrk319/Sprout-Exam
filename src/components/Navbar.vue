<template>
    <nav class="top-0 bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap items-center justify-between w-full p-4 mx-auto">
            <a href="https://sprout.ph/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/src/assets/sprout-logo.png" class="h-8" alt="Sprout Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sprout Exam</span>
            </a>
            <div class="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                <button type="button" @click="logout" class="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <ArrowLeftStartOnRectangleIcon class="w-8 h-8 rounded-md" />
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup>

import {useAuthStore} from '@/stores/authStore';
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/vue/24/solid';

const auth = useAuthStore();

const logout = () => {
  auth.logout();
  window.location.href = '/login';
}

</script>