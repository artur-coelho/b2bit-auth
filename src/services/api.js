import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${localStorage.getItem('token')}`,
  },
});

axiosInstance.interceptors.response.use((error) => {
  console.log('error: ', error);
});

export default axiosInstance;
