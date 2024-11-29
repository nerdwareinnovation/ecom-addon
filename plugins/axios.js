// import axios from "axios";

// const baseDomain = "http://localhost:1337";

// export const customHeaders = {
//   "Content-Type": "application/json",
//   Accept: "application/json",
// };

// export const baseUrl = baseDomain; // You can also use `${baseDomain}` if you want to keep it as a template string

// // Create an Axios instance
// const api = axios.create({
//   baseURL: baseUrl, // Fix: use baseURL instead of baseUrl
//   headers: customHeaders,
// });

// // Optionally, you can add interceptors here
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error("API Error:", error);
//     return Promise.reject(error);
//   }
// );

// export default defineNuxtPlugin((nuxtApp) => {
//   // Provide the axios instance globally
//   nuxtApp.provide("api", api);
// });
