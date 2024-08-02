import axios from "./AxiosInstance";
import {handleGetMethod} from './common'
export const getNavigation = async (slug) => {
    const response = await handleGetMethod(() => axios.get(`/navigations?filters[slug][$eq]=${slug}&populate[0]=imageCover`));
    return response.data.data[0];
}
export const getSubNavigations =  (parent) => {
    return  handleGetMethod(() => axios.get(`/navigations?filters[parentNavigation]=${parent}&populate[0]=imageCover&fields[0]=name&fields[1]=slug&fields[2]=description&fields[3]=parentNavigation`))
} 
export const getSubNavigationsDetail = (slug) => {
    return  handleGetMethod(() => axios.get(`/navigations?filters[slug]=${slug}&populate[0]=imageCover`))
}
export const getSubNavigationDetail =  (parent,slug) => {
    return  handleGetMethod(() => axios.get(`/navigations?filters[parentNavigation]=${parent}&filters[slug]=${slug}&populate=*`))
}
