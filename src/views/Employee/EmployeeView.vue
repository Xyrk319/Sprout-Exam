<template>
    <div>
        <div class="flex justify-between">
            <h1 class="text-2xl font-bold">Employees</h1>
            <Button @click="showCreateModal()" type="primary" text="Add Employee"/>
        </div>
    </div>
    <Table ref="tableRef" :columns="columns" :url="baseUrl">
      <template v-slot:actions="{ data, index }" slot="actions">
        <Button type="primary" @click="showEditModal(data)" text="Edit"/> 
        <Button type="danger" text="Delete"/> 
      </template>
    </Table>
    <FwbModal size="xl" v-if="isShowModal" @close="closeModal">
      <template #header>
        <div class="flex items-center text-lg">
          {{ modalTitle }}
        </div>
      </template>
      <template #body>
        <EmployeeForm ref="employeeFormRef" :employee="selectedEmployee" @submitted="closeModal"/>
      </template>
      <template #footer>
        <div class="flex justify-between">
          <FwbButton @click="closeModal" color="alternative">
            Cancel
          </FwbButton>
          <FwbButton @click="submitForm" color="green">
            Save
          </FwbButton>
        </div>
      </template>
    </FwbModal>
  </template>
  
<script setup>
import { ref, computed, onMounted } from 'vue';
import { FwbButton, FwbModal } from 'flowbite-vue';
import EmployeeForm from './EmployeeForm.vue'; // Assume this is your form component
import Table from '@components/Table.vue';
import Button from '@/components/Button.vue';

let baseUrl = `${import.meta.env.VITE_BACKEND_URL}/employees`;
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
let tableRef = ref(null);
let isShowModal = ref(false);
let selectedEmployee = ref(null);
const employeeFormRef = ref(null);

function showCreateModal() {
    isShowModal.value = true;
}
function showEditModal(employee) {
    selectedEmployee.value = employee;
    isShowModal.value = true;
}

function closeModal() {
  isShowModal.value = false;
  selectedEmployee.value = null; 
  tableRef.value.getData();
}


function submitForm() {
  console.log(employeeFormRef.value, employeeFormRef.value.submitForm);
  if (employeeFormRef.value && employeeFormRef.value.submitForm) {
    employeeFormRef.value.submitForm();
  } else {
    console.error("Form submission failed: Form reference not found.");
  }
}

let modalTitle = computed(() => selectedEmployee.value ? 'Edit Employee' : 'Add Employee');
</script>
  