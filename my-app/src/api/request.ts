import axios from "axios";

const request = axios.create({
  baseURL: "https://api.example.com",
  timeout: 10000,
});

request.interceptors.request.use((config) => {
  return config;
});

request.interceptors.response.use((response) => {
  return response;
});
