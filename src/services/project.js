import axios from './AxiosInstance'
export const getRelatedProjects = (navigation,projectId) => {
    return axios.get(`posts?filters[navigations][slug]=${navigation}&filters[id][$ne]=${projectId}&populate[0]=profile&pagination[limit]=2`)
}
export const getProjects = () => {
    return axios.get(`posts?filters[navigations][slug]=/du-an-tieu-bieu&populate[0]=profile&fields[0]=postTitle&fields[1]=postDescription&fields[2]=slug`)
}