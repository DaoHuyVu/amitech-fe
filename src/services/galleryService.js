import axios from "./AxiosInstance";
import { handleCallback } from "./common";

export const getGallery = (id) => {
    return handleCallback(() => axios.get(`/galleries/${id}?populate=*`))
}
export const getGalleries = (page=1,pageSize=4) => {
    return handleCallback(() => axios.get(`/galleries?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`))
}