import axios from 'axios';
import store from '@/app/store/store.ts';
import { setTokens } from '@/features/auth/model/authSlice.ts';

const url = location.origin.includes('node')
  ? 'http://vscode.vozduh.keenetic.link/proxy/8000/api'
  : 'http://localhost:8000/api';

const axiosInstance = axios.create({ baseURL: url });

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const accessToken = state.auth.accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (err) => {
    const state = store.getState();
    const refreshToken = state.auth.refreshToken;
    const { config } = err;
    console.log('axios.asdsad', err);
    // Попытка обновления
    if ((err?.response?.status === 401 || err?.response == null) && config) {
      // Попробуем обновить токен
      try {
        const access = await axios
          .post(`${url}/token/refresh/`, {
            refresh: refreshToken,
          })
          .then((r) => {
            store.dispatch(
              setTokens({
                accessToken: r.data.access,
                refreshToken: r.data.refresh || refreshToken,
              }),
            );
            return r.data.access;
          });

        config.headers.Authorization = `Bearer ${access}`;
        // Повторим оригинальный запрос с новым токеном
        return axiosInstance(config);
      } catch (refreshError) {
        // Если совсем потеря потерь - просим новый токен
        const access = await axios.post(`${url}/auth/`).then((r) => {
          store.dispatch(
            setTokens({
              accessToken: r.data.access,
              refreshToken: r.data.refresh,
            }),
          );
          return r.data.access;
        });

        config.headers.Authorization = `Bearer ${access}`;
        // Повторим оригинальный запрос с новым токеном
        return axiosInstance(config);
      }
    }

    // Обработка ошибок
    if (err.response) {
      // Сервер ответил с кодом, отличным от 2xx
      console.error('Server Error:', err.response.data);
    } else if (err.request) {
      // Запрос был сделан, но ответа не получено
      console.error('Network Error:', err.request);
    } else {
      // Что-то пошло не так при настройке запроса
      console.error('Error:', err.message);
    }
    return Promise.reject(err);
  },
);

export default axiosInstance;
