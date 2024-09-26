export const handleCallback = async (callback) => {
    let response = null
    try{
        response = await callback()
    }catch(err){
        console.log(err)
    }
    return response
}