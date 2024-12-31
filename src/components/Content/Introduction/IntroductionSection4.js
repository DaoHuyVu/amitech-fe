import Button from "../../button/Button"
import { Link } from 'react-router-dom'
import Carousel from '../../newComponents/carousel/Carousel'
import Gallery from '../../newComponents/gallery/Gallery'
import { useState, useEffect } from 'react'
import { getGallery } from '../../../services/galleryService'
import { host } from "../../../services/AxiosInstance"
import ResponsiveHeader from "../../text/ResponsiveHeader"
import { useTranslation } from "react-i18next"
export default function IntroductionSection4(){
    const {t} = useTranslation()
    const [data,setData] = useState(null)
    useEffect(() => {
        const fetchLang = () => {
            return window.localStorage.getItem('lang')
        }
        const fetchGallery = async () => {
            try{
                // vn = 0, en = 1
                const res = await getGallery(fetchLang === '0' ? 1 : 6)
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
                <ResponsiveHeader className="mb-4 text-uppercase">{t('common.hinh-anh-hoat-dong')}</ResponsiveHeader>
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
                                {t('button.xem-tat-ca')} &gt;&gt;
                        </Button>
                    </Link>
                </div>
        </section>
    )
}