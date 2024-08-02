export const handleGetMethod = async (callback) => {
    let response = null
    try{
        response = await callback()
    }catch(err){
        console.log(err)
    }
    return response
}