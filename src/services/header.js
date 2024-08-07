import axios from './AxiosInstance'
const primaryFields = 'fields[0]=name&fields[1]=slug&fields[2]=hasChildren&populate[childrenNavigations][fields][0]=slug&populate[childrenNavigations][fields][1]=name'
const secondaryFields = 'fields[0]=name&fields[1]=slug&fields[2]=hasChildren'
export const getPrimaryNavigation = async () => {
    return await axios.get(`/navigations?filters[menuLocation]=primary&${primaryFields}`);
}
export const getSecondaryNavigation = async () => {
    return await axios.get(`/navigations?filters[menuLocation]=secondary&${secondaryFields}`)
}
export const getHeaderContacts = async () => {
    return await axios.get('/contacts?populate=*');
}