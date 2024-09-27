import axios from "./AxiosInstance";
import {handleCallback} from './common'
export const getSubNavigations =  (parent) => {
    return  handleCallback(() => axios.get(`/navigations?filters[parentNavigation]=${parent}&populate[0]=imageCover&fields[0]=name&fields[1]=slug&fields[2]=description&fields[3]=parentNavigation`))
} 
export const getSubNavigationsDetail = (slug) => {
    return  handleCallback(() => axios.get(`/navigations?filters[slug]=${slug}&populate[0]=imageCover`))
}
export const getSubNavigationDetail =  (parent,slug) => {
    return  handleCallback(() => axios.get(`/navigations?filters[parentNavigation]=${parent}&filters[slug]=${slug}&populate=*`))
}
export const getNavigationById = (id) => {
    return handleCallback(() => axios.get(`/navigations/${id}`))
}
export const getNavigationDetailById = (id) => {
    return handleCallback(() => axios.get(`/navigations/${id}?populate[0]=imageCover`))
}