<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th v-for="column in columns" :key="column.field" scope="col" class="px-6 py-3">
                        {{ column.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="datum in data" :key="datum.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td v-for="column in columns" :key="column.field" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div v-if="column.field === 'actions'"> 
                            <slot name="actions" :data="datum"></slot>
                        </div>
                        <div v-else-if="column.type === 'enum'">
                            {{ getEnumValue(datum[column.name], column.enumUrl) }}
                        </div>
                        <div v-else> {{ datum[column.name] }} </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import axiosHelper from '@/helpers/axiosHelper';

const props = defineProps({
    columns: {
        type: Array,
        default: () => []
    },
    url: {
        type: String,
        default: ''
    }
});

const data = ref([]);
const enumValues = ref({});

onMounted(async () => {
    try {
        const response = await axiosHelper.get(props.url);
        if(response.status === 200){
            data.value = response.data;
        }
    } catch (error) {
        console.error(error);
    }

    await Promise.all(props.columns.filter(column => column.type === 'enum').map(async column => {
        const response = await axiosHelper.get(column.enumUrl);
        if(response.status === 200){
            enumValues.value[column.enumUrl] = response.data;
        }
    }));
});
const getEnumValue = (key, url) => {
    return enumValues.value[url]?.find(enumItem => enumItem.id === key)?.text || key;
};
</script>
