import axios from './AxiosInstance'
export const getOtherSolutions = async(slug) => {
    return await axios.get(`/navigations?filters[parentNavigation]=/giai-phap-chuyen-doi-so&filters[slug][$ne]=${slug}&pagination[limit]=4&populate=*`)
} 