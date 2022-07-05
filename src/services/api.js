import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${localStorage.getItem('token')}`,
  },
});

axiosInstance.interceptors.response.use(null, (error) => {
  localStorage.clear();
  window.location.href = '/login';
});

export default axiosInstance;
