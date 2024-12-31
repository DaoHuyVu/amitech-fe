import Slider from 'react-slick'
import img1 from '../../../assets/images/image 212.png'
import img2 from '../../../assets/images/image 213.png'
import img3 from '../../../assets/images/image 214.png'
import img4 from '../../../assets/images/image 215.png'
import { useTranslation } from 'react-i18next'
import ResponsiveHeader from '../../text/ResponsiveHeader'
import { useEffect, useState } from 'react'
import { getCertifications } from '../../../services/CertificationService'
import { host } from '../../../services/AxiosInstance'

export default function IntroductionSetion5(){
    const {t} = useTranslation()
    const [data,setData] = useState(null)
    useEffect(() => {
        const fetchData = async() => {
            try{
                const res = await getCertifications()
                setData(res.data.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])
    if(!data){
        return
    }
    const settings = {
        dots: true,
        speed: 2000,    
        infinite : true,
        autoPlay : true,
        autoPlaySpeed : 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive : [
            {
                breakpoint : 1400,
                settings : {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint : 992,
                settings : {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint : 768,
                settings : {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const slides = data.map((e,index)=>{
        return(
            <div className='p-2' key={index}>
                <img  loading='lazy' src={`${host}${e.attributes.image.data.attributes.url}`} alt = 'Certificate' width='100%' height='200px' />
                <div className='p-3' style={{height : 'calc(88px + 1rem)',backgroundColor : '#666666'}} >
                    {e.attributes.title}
                </div>
            </div>
        )
    })
    return(
        <section id='chung-chi'>
            <ResponsiveHeader className="mb-4 text-uppercase text-center" style={{color : '#4d4d4d'}}>{t('common.chung-chi-chung-nhan')}</ResponsiveHeader>
                <div className='container'>
                   <div className='custom-slider '>
                    <Slider {...settings}>
                        {slides}
                    </Slider>
                   </div>
                </div>
        </section>
    )
}