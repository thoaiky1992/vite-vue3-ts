import axios from 'axios';
import moment from 'moment';
import 'moment-timezone';
import { App } from 'vue';
import { LAYOUT, routerType } from '../router';
import jwt_decode from 'jwt-decode';

export default function BootstrapAxios(router: routerType, app: App) {
  const axiosInstance = axios.create({
    baseURL: '/api',
    headers: {
      ClientTimeZone: moment.tz.guess()
    }
  });

  axiosInstance.interceptors.request.use(
    async (config) => {
      if (localStorage.getItem('access_token')) {
        const payload: any = localStorage.getItem('access_token')
          ? jwt_decode(localStorage.getItem('access_token') ?? '')
          : undefined;

        const currentTime = new Date().getTime() / 1000;
        if (
          payload &&
          payload.exp < currentTime &&
          router.currentRoute.value.meta.layout === LAYOUT.APP
        ) {
          const res = await axios.post('/api/auth/refresh-token', {
            refresh_token: localStorage.getItem('refresh_token') ?? ''
          });
          const { access_token } = res.data;
          localStorage.setItem('access_token', access_token);
        }
      }
      const access_token = localStorage.getItem('access_token');
      config.headers = {
        Authorization: 'Bearer ' + access_token
      };
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      console.log(error?.response?.status);
      console.log(error?.name);
      if (error && error?.name === 'InvalidTokenError') {
        localStorage.removeItem('access_token');
        router.push('/login');
        return;
      }

      if (error?.response?.status === 401) {
        switch (error?.response?.data?.message) {
          case 'refresh-token-expired':
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            router.push('/login');
            break;
          default:
            break;
        }
      }
      return Promise.reject(error);
    }
  );

  const axiosPlugin = {
    install: (app: App) => {
      app.config.globalProperties.$axios = axiosInstance;

      app.provide('axios', axiosInstance);
    }
  };

  return {
    axiosInstance,
    axiosPlugin
  };
}
