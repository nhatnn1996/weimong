import axiosClient from './base/axios-client';

export const authApi = {
  async login(payload) {
    return axiosClient.post('/auth/local', payload);
  },

  logout() {
    window.localStorage.removeItem('token');
  },

  getProfile() {
    return axiosClient.get('/users/me');
  }
};
