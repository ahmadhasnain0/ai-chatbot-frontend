import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  withCredentials: true, // ★ Send cookies with every request
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
API.interceptors.request.use(
  (config) => {
    // Allow FormData without Content-Type
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
API.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Hand the error back to the caller (AuthContext decides what to do)
    return Promise.reject(error?.response || error);
  }
);


export default API;
