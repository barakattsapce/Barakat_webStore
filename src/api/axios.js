import axios from "axios";

const api = axios.create({
  baseURL: "https://barakattspace-webstore.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;