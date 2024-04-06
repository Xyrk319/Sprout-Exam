import axios from 'axios'

const axiosHelper = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // Your API base URL
});

axiosHelper.interceptors.request.use(
  config => {
    const token = localStorage.getItem(`${import.meta.env.VITE_APP_NAME}_token`);
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosHelper;
