import axios from 'axios';
const apiUrl = 'https://fakestoreapi.com';

const axiosConfig = axios.create({
  baseURL: apiUrl,
  timeout: 3000,
});


axiosConfig.interceptors.request.use(
  async config => {
    console.log('[API REQUEST]', {
      method: config.method,
      url: config.baseURL + config.url,
      headers: config.headers,
      data: config.data,
    });
    return config;
  },
  error => {
    console.log('[API REQUEST ERROR]', error);
    return Promise.reject(error);
  }
);

axiosConfig.interceptors.response.use(
  response => {
    console.log('[API RESPONSE]', {
      url: response.config.url,
      status: response.status,
      data: response.data,
    });
    return response;
  },
  error => {
    if (error.response) {
      console.log('[API RESPONSE ERROR]', {
        url: error.config?.url,
        status: error.response.status,
        data: error.response.data,
      });
    } else {
      console.log('[NETWORK ERROR]', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosConfig;
