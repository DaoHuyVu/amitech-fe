import { host } from "./AxiosInstance"
export function getNavigationImageCover(response){
    return `${host}${response.imageCover.url}`
}
//  Retrieve post images
export function getPostImageArray(response){
    return response.attributes.images.data
}
// Retrieve post image url
export function getPostImage(response){
    return `${host}${response.attributes.url}`
}
export function getPostProfile(response){
    return `${host}${response.attributes.profile.data.attributes.url}`
}
// To retrieve a single navigation slug, user must call res.attributes.slug
export function getPostNavigationArray(response){
    return response.attributes.navigations.data
}



