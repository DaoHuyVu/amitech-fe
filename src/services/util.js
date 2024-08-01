import { host } from "./AxiosInstance"
export function getImageCover(response){
    return `${host}${response.imageCover.url}`
}