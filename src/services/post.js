import axios from './AxiosInstance'
import { handleGetMethod } from './common'

export const getPosts = async (slug) => {
    let response = await handleGetMethod(() => axios.get(`/posts?filters[navigations][slug]=${slug}&fields[0]=postTitle&fields[1]=postDescription&fields[2]=slug&populate[0]=profile`))
    return response.data
}
export const getPostDetail = async (slug) => {
    let response = await handleGetMethod(() => axios.get(`/posts?filters[slug]=${slug}&populate=*`))
    return response.data.data[0]
}