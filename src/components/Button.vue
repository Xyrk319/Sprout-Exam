<template>
    <button v-if="$props.type == 'primary'" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        {{ $props.text }}
    </button>
    <button v-if="$props.type == 'danger'" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        {{ $props.text }}
    </button>
</template>

<script setup lang="ts">
    import { defineProps } from  'vue';

    const props = defineProps({
        type: {
            type: String,
            default: 'primary',
        },
        text: {
            type: String,
            default: 'Button',
        }
    });
</script>