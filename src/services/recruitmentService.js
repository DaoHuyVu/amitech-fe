import { handleCallback } from "./common"
import axios from './AxiosInstance'
export const fetchRecruitments = () => {
  return handleCallback(() => axios.get(`/jobs?populate=*`))
}
export const fetchRecruitment = (slug) => {
  return handleCallback(() => axios.get(`/jobs?filters[slug][$eq]=${slug}`))
}
export const fetchRelatedRecruitment = (slug,pageSize=4) => {
  return handleCallback(() => axios.get(`/jobs?filters[slug][$ne]=${slug}&populate=*&pagination[page]=1&pagination[pageSize]=${pageSize}`))
}