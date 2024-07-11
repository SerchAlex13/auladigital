import axios from "axios";

// const axiosInstance: AxiosInstance = axios.create({

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/rest-api",
    headers: {
        "Content-Type": "application/json",
    }
});

export default axiosInstance;