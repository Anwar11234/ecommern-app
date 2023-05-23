import axios from "axios";

const instance = axios.create({
    baseURL: "https://ecommern-app-backend.onrender.com",
});

export default instance;