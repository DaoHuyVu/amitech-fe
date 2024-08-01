import axios from './AxiosInstance'
const headerFields = 'fields[0]=name&fields[1]=slug&fields[2]=hasChildren'
export const getPrimaryNavigation = async () => {
    return await axios.get(`/navigations?filters[menuLocation]=primary&${headerFields}`);
}
export const getPrimarySubNavigation = async (parentNavigation) => {
    return await axios.get(`/navigations?filters[parentNavigation][$eq]=${parentNavigation}&${headerFields}`)
}
export const getSecondaryNavigation = async () => {
    return await axios.get(`/navigations?filters[menuLocation]=secondary&${headerFields}`)
}
export const getHeaderContacts = async () => {
    return await axios.get('/contacts?populate=*');
}