import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http//localhost:3000',
  timeout: 10000, // Set a timeout for requests
});

// Optional: Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add authorization tokens or other headers here if needed
    // config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optional: Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors, log them, or redirect based on status codes
    if (error.response && error.response.status === 401) {
      // For example, redirect to login on 401 Unauthorized
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;