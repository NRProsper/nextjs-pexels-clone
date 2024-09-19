import axiosClient from "@/api/axios-client";

export const fetchImages = async (page=1, per_page=20) => {
    try{
        const response = await axiosClient.get(`/curated?page=${page}&per_page=${per_page}`);
        return response.data.photos;
    }catch (error) {
        throw new Error('Failed to fetch images');
    }
}