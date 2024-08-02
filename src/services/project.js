import axios from './AxiosInstance'
export const getRelatedProjects = (navigation,projectId) => {
    return axios.get(`posts?filters[navigations][slug]=${navigation}&filters[id][$ne]=${projectId}&populate[0]=profile&pagination[limit]=2`)
}