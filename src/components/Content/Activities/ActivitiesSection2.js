import { host } from "../../../services/AxiosInstance"
import { getGallery } from "../../../services/galleryService"
import Carousel from "../../newComponents/carousel/Carousel"
import Gallery from "../../newComponents/gallery/Gallery"
import { useLoaderData } from "react-router-dom"

export const loader = async ({params}) => {
    return await getGallery(params.id)
}
export default function ActivitySection2(){
    const data = useLoaderData().data.data
    const slides = data ? data.attributes.images.data.map((e,index) => {
        return (
            <div key={index}>
                <Gallery image={`${host}${e.attributes.url}`} >
                    <p>{index+1}/{data.attributes.images.data.length} ảnh</p>
                </Gallery>
            </div>
        )
    }) : []
    return(
        <section id="activities__section2">
            <div className="container d-flex flex-column align-items-center" >
                <div className='w-100 pb-3'>
                    <Carousel >
                        {slides}
                    </Carousel>
                </div>
                <p style={{weight : '400',fontSize : '12px',color : '#4d4d4db2'}} className='mb-3'>
                    {
                        data && data.attributes.galleryDate
                    }
                </p>
                <h3 
                    style={{textWrap : 'wrap',color : 'black',fontWeight : '700'}} 
                    className='mb-3'
                >
                    {data && data.attributes.galleryTitle}
                </h3>
            </div>  
        </section>
    )
}