import axios from './AxiosInstance'
export const getRelatedProducts = async (navigation,productId) => {
    return axios.get(`posts?filters[navigations][slug]=${navigation}&filters[id][$ne]=${productId}&populate[0]=profile&pagination[limit]=2`)
} 
export const getProducts = async () => {
    return axios.get(`product-categories?populate[posts][populate][0]=profile&&populate[posts][fields][1]=postTitle&pagination[limit]=4`)
}