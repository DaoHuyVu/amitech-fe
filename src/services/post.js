import axios from './AxiosInstance'
import { handleCallback } from './common'

export const getPosts = async (slug) => {
    let response = await handleCallback(() => axios.get(`/posts?filters[navigations][slug]=${slug}&fields[0]=postTitle&fields[1]=postDescription&fields[2]=slug&populate[0]=profile`))
    return response.data
}
export const getPostDetail = async (slug) => {
    let response = await handleCallback(() => axios.get(`/posts?filters[slug]=${slug}&populate=*`))
    return response.data.data[0]
}
export const searchPosts = async (s,size,page=1) => {
    let response = await handleCallback(() => axios.get(`/posts?filters[postTitle][$containsi]=${s}&fields[0]=slug&fields[1]=postTitle&populate[profile][fields][0]=url&populate[navigations][fields][1]=slug&pagination[pageSize]=${size}&pagination[page]=${page}&fields[2]=excerp`))
    return response.data
}
export const getPostDetailById = (id) => {
    return handleCallback(()=>axios.get(`/navigations/${id}?populate=*`))
}
export const getPostsByNavigationId = (id,page,pageSize) => {
    return handleCallback(() => axios.get(`/posts?fields[0]=postTitle&fields[1]=slug&populate[navigations]=true&filters[navigations][id][$eq]=${id}&populate[subCategories]=true&populate[profile]=true&pagination[page]=${page}&pagination[pageSize]=${pageSize}`))
}

