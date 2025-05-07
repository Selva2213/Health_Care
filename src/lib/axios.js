import axios from "axios";

// export const BASE_URL = "http://localhost:5000";
export const BASE_URL = "https://health-care-app-backend-7kvu.onrender.com";

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
