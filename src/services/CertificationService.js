import axios from "./AxiosInstance";
import { handleCallback } from "./common";

export const getCertifications = () => {
    return handleCallback(() => axios.get(`/certifications?populate=*`))
}