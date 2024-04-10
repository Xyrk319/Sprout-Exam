<template>
    <Table :columns="columns" :url="baseUrl" >
        <template #actions>
            <Button type="primary" text="Edit"/> 
            <Button type="danger" text="Delete"/> 
        </template>
    </Table>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Table from '@components/Table.vue';
import Button from '@/components/Button.vue';
let baseUrl = `${import.meta.env.VITE_BACKEND_URL}/employees`

let columns = [
    {
        name: "id",
        label: "ID",
        field: "id",
    },
    {
        name: "first_name",
        label: "First Name",
        field: "first_name",
    },
    {
        name: "last_name",
        label: "Last Name",
        field: "last_name",
    },
    {
        name: "email",
        label: "Email",
        field: "email",
    },
    {
        name: "number_of_leaves",
        label: "Number of Leaves",
        field: "number_of_leaves",
    },
    {
        name: "contract_end_date",
        label: "Contract End Date",
        field: "contract_end_date",
    },
    {
        name: "employee_type",
        label: "Employee Type",
        field: "employee_type",
        type: "enum",
        enumUrl: `${import.meta.env.VITE_BACKEND_URL}/employees/types`
    },
    {
        name: "actions",
        label: "Actions",
        field: "actions",
    },
];

</script>