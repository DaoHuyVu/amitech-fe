import axios from './AxiosInstance'
import { handleCallback } from './common'

export const getNewsPostsById = (id,page=1,pageSize=10) => {
    return handleCallback(() => axios.get(`/posts?populate[navigations]=true&filters[navigations][id]=${id}&pagination[${page}]=1&pagination[${pageSize}]=10&populate[profile]=true&populate[subCategories]=true`))
}
export const getRelatedNewsPosts = (slug,pageSize=4,navigation) => {
    return handleCallback(() => axios.get(`/posts?filters[slug][$ne]=${slug}&populate[profile]=true&pagination[page]=1&pagination[pageSize]=${pageSize}&populate[navigations]=true&filters[navigations][slug][$eq]=${navigation}`))
}