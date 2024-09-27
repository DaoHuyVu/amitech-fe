import axios from './AxiosInstance'
import { handleCallback } from './common'
export const getOtherSolutions = async(slug) => {
    return await axios.get(`/navigations?filters[parentNavigation]=/giai-phap-chuyen-doi-so&filters[slug][$ne]=${slug}&pagination[limit]=4&populate=*`)
} 
export const getSolutionDetailsById = (id) => {
    return handleCallback(() => axios.get(`/navigations/${id}?populate[imageCover]=*&populate[childrenNavigations][populate][0]=imageCover`))
}