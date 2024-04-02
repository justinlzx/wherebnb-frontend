import axios from 'axios';

// Define the AUTH_KEY variable
const AUTH_KEY="uIW1wNy1o566NkjQkPBLffQW5gyUiPGWf8f1jueQhAgFMijpeUMX97edbb5JUayUn1TCaN2Mg7Zp8r0jVmD32HwefVTETuIJmaniJR9fJs3z7WXVepoPmhXUNxR4ur7l";

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