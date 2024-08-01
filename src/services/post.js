import axios from './AxiosInstance'

export const getPosts = (slug) => {
    return axios.get(`/posts?filters[navigations][slug]=${slug}&fields[1]=postTitle&fields[2]=postDescription&populate[0]=profile`)
}
export const getPostsDetail = (id) => {
    return axios.get(`posts?filters[id]=${id}&populate[0]=images`)
}