import { DateTime } from "luxon"
import { host } from "./AxiosInstance"
export function getNavigationIdImageCover(response){
    return `${host}${response.attributes.imageCover.data.attributes.url}`
}
// The latter get imageURL when navigation is sparse. Yes this is pretty fucked up 
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
export function getPostNavigation(response){
    return response.attributes.navigations.data[0].attributes.slug
}
export function getPostCategory(response){
    return response.attributes.subCategories.data.attributes.name
}
export function getMediumSizePostProfile(response){
   return `${host}${response.attributes.profile.data.attributes.formats.medium.url}`
}
export function convertUTCPlus7(dateTime){
    return DateTime.fromISO(dateTime,{zone : 'utc'}).setZone('utc+7').toFormat('dd/MM/yyyy HH:mm')
}
