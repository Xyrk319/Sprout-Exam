<template>
  <div class="flex items-center justify-center h-screen mb-8">
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" @submit.prevent="submitForm">
            <h5 class="text-xl font-medium text-center text-gray-900 dark:text-white">Sprout Exam</h5>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input v-model="email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"/>
            </div>
            <div v-if="emailError " class="text-red-500">
                {{ emailError }}
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input v-model="password" type="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
            </div>
            <div v-if="passwordError " class="text-red-500">
                {{ passwordError  }}
            </div>
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
        </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useForm, useField } from 'vee-validate';
import axios from 'axios';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().required('Email is required!').email('Must be a valid email'),
  password: yup.string().required('Password is required!'),
});

const { handleSubmit, errors } = useForm({
  validationSchema: schema,
});

const { value: email, errorMessage: emailError } = useField('email');
const { value: password, errorMessage: passwordError } = useField('password');

const router = useRouter();

const submitForm = () => {
  handleSubmit(onSubmit)();
};

const onSubmit = async (values) => {
  console.log(errors.value, emailError, passwordError);
  try {
    
    // Use values.email and values.password here
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
      email: values.email,
      password: values.password,
    });
    const token = response.data.access_token; // Ensure this matches your API response
    localStorage.setItem(`${import.meta.env.VITE_APP_NAME}_token`, token);
    router.push('/dashboard');
  } catch (error) {
    console.error('Login failed', error?.response?.data ?? error);
  }
};
</script>
