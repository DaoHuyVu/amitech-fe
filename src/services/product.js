import axios from './AxiosInstance'
export const getRelatedProducts = async (navigation,productId) => {
    return axios.get(`posts?filters[navigations][slug]=${navigation}&filters[id][$ne]=${productId}&populate[0]=profile&pagination[limit]=2`)
} 