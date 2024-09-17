import axios from './AxiosInstance'
export const getRelatedProducts = async (navigation,productId) => {
    return axios.get(`posts?filters[navigations][slug]=${navigation}&filters[id][$ne]=${productId}&populate[0]=profile&pagination[limit]=2`)
} 
export const getProducts = async (navigation) => {
    return axios.get(`/sub-categories?populate[posts][fields][0]=postTitle&populate[posts][populate][profile][fields][0]=url&populate[posts][fields][1]=slug&populate[navigation][fields][0]=name&filters[navigation][name][$eq]=${navigation}&pagination[limit]=3`)
}   
