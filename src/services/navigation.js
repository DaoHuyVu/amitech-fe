import axios from "./AxiosInstance";

export const getNavigation = async (slug) => {
    return await axios.get(`/navigations?filters[slug][$eq]=${slug}&populate[0]=imageCover`);
}
export const getSubNavigations = async (parent) => {
    return await axios.get(`/navigations?filters[parentNavigation]=${parent}&populate[0]=imageCover&fields[0]=name&fields[1]=slug&fields[2]=description&fields[3]=parentNavigation`)
} 
export const getSubNavigationsDetail = async (slug) => {
    return await axios.get(`/navigations?filters[slug]=${slug}&populate[0]=imageCover`)
}
export const getSubNavigationDetail = async (parent,slug) => {
    return await axios.get(`/navigations?filters[parentNavigation]=${parent}&filters[slug]=${slug}&populate=*`)
}
