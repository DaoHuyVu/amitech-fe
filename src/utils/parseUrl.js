export function getLastPathname(url){
    const arr = url.split("/")
    return `/${arr[arr.length-1]}`
}
export function concatePath(arr,length,url){
    let pre = ""
    for(let i = 0; i<length ;++i){
        pre += `${arr[i]}`
        if(i<length-1)
            pre += '/'
    }
    return `${pre}${url}`
}