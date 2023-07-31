import axios from 'axios';

const axiosInstance = axios.create({
  // Set the base URL for your API
  baseURL: 'http://localhost:3001/api/v1',
  // You can add other axios configurations here
});

// Attach the authorization header to every request
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    console.log("token "+token);
  const authToken = token; // Replace with your actual authorization token
 // config.headers.Authorization = 'Bearer ${authToken}';
 config.headers.Authorization = 'Bearer '+authToken;
 console.log("config file is "+config);
  return config;
});

export default axiosInstance;