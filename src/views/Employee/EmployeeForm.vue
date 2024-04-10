<template>
  <div class="flex-1 space-y-2">
    <fwb-input
      v-model="firstName"
      placeholder="Enter First Name"
      label="First name"
      :validation-status="firstNameError ? 'error' : ''"
    >
      <template #validationMessage>
        {{ firstNameError }}
      </template>
    </fwb-input>
    <fwb-input
      v-model="lastName"
      placeholder="Enter Last Name"
      label="Last name"
      :validation-status="lastNameError ? 'error' : ''"
    >
      <template #validationMessage>
        {{ lastNameError }}
      </template>
    </fwb-input>
    <fwb-input
      v-model="email"
      placeholder="Enter Email"
      label="Email"
      :validation-status="emailError ? 'error' : ''"
    >
      <template #validationMessage>
        {{ emailError }}
      </template>
    </fwb-input>
    <fwb-select
      v-model="employeeType"
      :options="employeeTypes"
      label="Employee Type"
      placeholder="Select Employee Type"
      :validation-status="employeeTypeError ? 'error' : ''"
    >
      <template #validationMessage>
        {{ employeeTypeError }}
      </template>
    </fwb-select>
    <fwb-input v-if="employeeType == 1"
      v-model="numLeaves"
      placeholder="Enter Number of Leaves"
      label="Number of Leaves"
    />
    <div v-if="employeeType == 2">
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contract End Date</label>
      <VueDatePicker v-model="contractEndDate"></VueDatePicker>
    </div>
  </div>
  
</template>
  
<script setup>
import { onMounted, ref } from 'vue';
import { FwbInput, FwbSelect  } from 'flowbite-vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import axiosHelper from '@/helpers/axiosHelper';
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';


const props = defineProps({
  employeeId: String
});

const emit = defineEmits(['submitted']);

const form = yup.object({
  firstName: yup.string().required('First name is required!'),
  lastName: yup.string().required('Last name is required!'),
  email: yup.string().required('Email is required!').email('Must be a valid email'),
  employeeType: yup.string().required('Employee type is required!'),
  numLeaves: yup.number(),
  contractEndDate: yup.date().nullable(),
});

const { handleSubmit, errors } = useForm({
  validationSchema: form,
});

const { value: firstName, errorMessage: firstNameError } = useField('firstName');
const { value: lastName, errorMessage: lastNameError } = useField('lastName');
const { value: email, errorMessage: emailError } = useField('email');
const { value: employeeType, errorMessage: employeeTypeError } = useField('employeeType');
const { value: numLeaves, errorMessage: numLeavesError } = useField('numLeaves');
const { value: contractEndDate, errorMessage: contractEndDateError } = useField('contractEndDate');

const submitForm = () => {
  handleSubmit(onSubmit)();
};

const onSubmit = async (values) => {
  try {
    if(props.employeeId) {
      await axiosHelper.put(`${import.meta.env.VITE_BACKEND_URL}/employees/${props.employeeId}`, {
        email: values.email,
        first_name: values.firstName,
        last_name: values.lastName,
        number_of_leaves: values.numLeaves,
        contract_end_date: values.contractEndDate,
        employee_type: values.employeeType
      });
    }else{
      await axiosHelper.post(`${import.meta.env.VITE_BACKEND_URL}/employees`, {
        email: values.email,
        first_name: values.firstName,
        last_name: values.lastName,
        number_of_leaves: values.numLeaves,
        contract_end_date: values.contractEndDate,
        employee_type: values.employeeType
      });
    }
    emit('submitted');
  } catch (error) {
    console.error(error);
  }
};

let employeeTypes = ref(null);
onMounted(() => {
  if (props.employeeId) {
    axiosHelper.get(`${import.meta.env.VITE_BACKEND_URL}/employees/${props.employeeId}`)
  }
  axiosHelper.get(`${import.meta.env.VITE_BACKEND_URL}/employees/types`).then((response) => {
    employeeTypes.value = response.data.map((type) => {
        return { value: type.id, name: type.text };
    });
  });
})

defineExpose({ submitForm });
</script>
  