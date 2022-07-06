import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

axiosInstance.interceptors.response.use(null, (error) => {
  if (
    error.response.status === 401 &&
    !window.location.href.includes('login')
  ) {
    localStorage.clear();
    window.location.href = '/expired';
  }
});

export default axiosInstance;
