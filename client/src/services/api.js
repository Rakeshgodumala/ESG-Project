import axios from "axios";

const API = axios.create({
  baseURL:
    "https://esg-project-6b9c.onrender.com/api",
});

export default API;