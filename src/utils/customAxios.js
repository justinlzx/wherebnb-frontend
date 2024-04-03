import axios from 'axios';

// Define the AUTH_KEY variable
const AUTH_KEY=process.env.AUTH_KEY;

// Create a custom instance of axios
const customAxios = axios.create();

// Set up a request interceptor
customAxios.interceptors.request.use((config) => {
  // Append the API key to the headers
  config.headers['Authorization'] = `Bearer ${AUTH_KEY}`;

  // Return the modified config
  return config;
}, (error) => {
  // If there's an error, reject the Promise with it
  return Promise.reject(error);
});

export default customAxios;