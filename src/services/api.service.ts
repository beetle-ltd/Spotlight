import axios from "axios";
import { BASE_URL } from "@/constants/api-constants";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // "X-App-Name": "Spotlight",
  },
});

export default api;
