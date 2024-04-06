import { defineStore } from 'pinia';
import axiosHelper from '@/helpers/axiosHelper';
import LoginPayload from '@interfaces/LoginPayload';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem(`${import.meta.env.VITE_APP_NAME}_token`) || '',
    status: '',
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    setUser(payload: any) {
      this.user = payload;
    },
    setToken(payload: any) {
      this.token = payload;
      localStorage.setItem(`${import.meta.env.VITE_APP_NAME}_token`, payload);
    },
    clearAuthData() {
      this.user = null;
      this.token = '';
      localStorage.removeItem(`${import.meta.env.VITE_APP_NAME}_token`);
    },
    async login(userData: LoginPayload) {
      this.status = 'loading';
      try {
        const response = await axiosHelper.post(`${import.meta.env.VITE_BACKEND_URL}/login`, userData);
        this.setToken(response.data.token);
        this.setUser(response.data.user); // Adjust based on your API response
        this.status = 'success';
      } catch (error) {
        this.status = 'error';
        this.clearAuthData();
        throw error;
      }
    },
    logout() {
      this.clearAuthData();
    },
  },
});
