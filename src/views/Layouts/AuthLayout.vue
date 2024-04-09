<template>
    <div class="flex-col flex-1 h-screen">
        <header class="w-full">
            <Navbar />
        </header>
        <div class="flex flex-1 overflow-hidden">
            <aside class="w-64 h-full overflow-y-auto text-white bg-gray-800">
                <Sidebar />
            </aside>
            <main class="flex-1 p-4 overflow-y-auto">
                <RouterView :key="$route.path" />
            </main>
        </div>
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
</script>
