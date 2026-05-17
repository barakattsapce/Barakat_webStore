import axios from "axios";

const api = axios.create({
  baseURL: "https://barakattspace-webstore.onrender.com/api/v1",
<<<<<<< HEAD

=======
>>>>>>> 7e99d36dd2516ded5ee34ed14e97e9c9d964fc3b
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

<<<<<<< HEAD
// interceptor
api.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

=======
>>>>>>> 7e99d36dd2516ded5ee34ed14e97e9c9d964fc3b
export default api;