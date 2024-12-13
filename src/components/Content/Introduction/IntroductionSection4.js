import Button from "../../button/Button"
import { Link } from 'react-router-dom'
import Carousel from '../../newComponents/carousel/Carousel'
import Gallery from '../../newComponents/gallery/Gallery'
import { useState, useEffect } from 'react'
import { getGallery } from '../../../services/galleryService'
import { host } from "../../../services/AxiosInstance"
export default function IntroductionSection4(){
    const [data,setData] = useState(null)
    useEffect(() => {
        const fetchGallery = async () => {
            try{
                const res = await getGallery(1)
                setData(res.data.data)
            }catch(ex){
                console.error(ex)
            }
        }
        fetchGallery()
    },[])
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
        <section id="hinh-anh-hoat-dong">
            <div className="container d-flex flex-column align-items-center">
                <h2 className="text-center mb-4 text-uppercase">Hình ảnh hoạt động</h2>
                    <div className='w-100 pb-3'>
                        <Carousel >
                            {slides}
                        </Carousel>
                    </div>
                    <p style={{weight : '400',fontSize : '12px',color : '#ffffffb2'}} className='mb-3'>
                        {
                            data && data.attributes.galleryDate
                        }
                    </p>
                    <h3 style={{textWrap : 'wrap'}} className='mb-3'>{data && data.attributes.galleryTitle}</h3>
                    <Link to='/gioi-thieu/hinh-anh-hoat-dong/1' style={{color : 'white'}}>
                        <Button style={{backgroundColor : '#00c2ff'}}>
                                Xem tất cả &gt;&gt;
                        </Button>
                    </Link>
                </div>
        </section>
    )
}