import axios from 'axios'
// const token = 'cff7497f22d05a8ae0af1608ff826adbe052ffb0eee83b09feb08ab9b5f6f1aafe6b8cc6a2dd7f462ed5fc20160598ce7e3b39940256eeab288208fab8a4a6c8a3a080a17c0cc63deec0e4066f32e2900aaebb56cfae2ee622bc0d5ad902b1082238aa8614e7f9fcef161b624a409b3e4eaa31a353d1af1c27d37443c8e553e4'
const strapi_host = `${process.env.REACT_APP_SCHEME}://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}`
export const host = strapi_host
const axiosInstance = axios.create({
    baseURL : `${strapi_host}/api`,
    timeout : 5000,
    headers : {
        // 'Authorization' : `Bearer ${token}`,
        "Content-Type" : 'application/json'
    }
})
axiosInstance.interceptors.request.use((config) => {
    const lang = window.localStorage.getItem("lang")
    if(lang !== '0'){
        config.url += `${config.url.includes('?') ? '&' : '?'}locale=en`
    }
    return config
},(error) => {
    return Promise.reject(error)
})
export default axiosInstance