import axios from "axios";

const  axiosClient = axios.create({
    baseURL: "https://api.pexels.com/v1",
})

axiosClient.interceptors.request.use(
    (config) => {
        config.headers.Authorization = process.env.NEXT_PUBLIC_PEXELS_API_KEY as string;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('Error fetching data:', error);
        return Promise.reject(error);
    }
);


export default axiosClient;