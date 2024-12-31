import { useState,useEffect } from 'react'
import Button from '../../button/Button'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import Card from '../../card/Card'
import ImageCard from '../../card/ImageCard'
import CardContent from '../../card/CardContent'
import CardCategory from '../../card/CardCategory'
import CardTitle from '../../card/CardTitle'
import CardDescription from '../../card/CardDescription'
import { getNewsPostsById } from '../../../services/news'
import { getPostCategory, getPostProfile } from '../../../services/util'
import aspect47Wrapper from '../../card/aspectWrapper/aspect47Wrapper'
import { useTranslation } from 'react-i18next'
export default function News(){
    const {t} = useTranslation()
    const [data,setData] = useState(null)
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const res = await getNewsPostsById(6)
                setData(res.data.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])
    const carouselItems = data ? data.slice(0,6).map((e,index) => {
       return (
            <Card key={index} className='d-flex'>
                <ImageCard src={getPostProfile(e)} AspectWrapper={aspect47Wrapper}/>
                <CardContent style={{backgroundColor : '#F1F7FF',minHeight : '300px'}}>
                    <CardCategory style={{color : '#4d4d4db2',textTransform : 'uppercase'}}>{getPostCategory(e)}</CardCategory>
                    <CardTitle maxLines='2' style={{color : '#4d4d4d',fontSize:"24px",textTransform : 'none'}}>{e.attributes.postTitle}</CardTitle>
                    <CardDescription coverRemain='false' style={{color : '#4d4d4db2'}}>{e.attributes.excerp}</CardDescription>
                    <Link to={`/tin-tuc-va-su-kien/${e.attributes.slug}`} style={{color : '#00c2ff',fontWeight : 'bold'}}>
                        {t('button.xem-them')} &gt;&gt;
                    </Link>
                </CardContent>
            </Card>
       ) 
    })  : null
    const carouselSettings = {
        dots: true,
        slidesToShow : 1,
        slidesToScroll : 1,
        infinite : true,
        speed : 1000,
        autoplay : true,
        autoplaySpeed : 5000,
        appendDots : dots => (
            <div style={{textAlign : 'start',bottom : '0px'}}>
              <ul className='ps-3'> {dots} </ul>
            </div>
        )
    }
    const newsColumns = data ? data.slice(6,10).map((e,index) => {
        return (
            <div className='col-12 col-md-6' key={index}>
                <Card className='d-flex'>
                <ImageCard src={getPostProfile(e)} AspectWrapper={aspect47Wrapper}/>
                <CardContent style={{backgroundColor : '#F1F7FF'}}>
                    <CardCategory style={{color : '#4d4d4db2',textTransform : 'uppercase'}}>{getPostCategory(e)}</CardCategory>
                    <CardTitle maxLines='3' style={{color : '#4d4d4d',fontSize : '16px',lineHeight : '24px',height : 'calc(24px*3)',textTransform : 'none'}}>{e.attributes.postTitle}</CardTitle>
                    <Link to={`'/tin-tuc-va-su-kien/${e.attributes.slug}`} style={{color : '#00c2ff',fontWeight : 'bold'}}>
                        {t('button.xem-them')} &gt;&gt;
                    </Link>
                </CardContent>
                </Card>
            </div>
        )
    }) : null
    return(
        <section id="home_news">
            <div className="container d-flex flex-column align-items-center">
                <div className="text-center pb-4">
                    <h2 style={{color : '#4D4D4D',fontWeight : '700',textTransform : 'uppercase'}}>{t('common.tin-tuc-va-su-kien')}</h2>
                </div>
                <div className="row w-100 h-100 pb-4 d-flex flex-row">
                    <div className="col-12 col-xl-6">
                        <Slider {...carouselSettings} className='custom-carousel h-100 custom-carousel__button--disabled'>
                            {data && carouselItems}
                        </Slider>
                    </div>
                    <div className="col-12 col-xl-6">
                        <div className="row gy-3 ">
                            {data && newsColumns}
                        </div>
                    </div>
                </div>
                <Button
                    style={{backgroundColor : '#006CE7'}}>
                    <Link to='/tin-tuc-va-su-kien'>
                        <p style={{color : 'white'}}>{t('button.xem-them')} &gt;&gt;</p>
                    </Link>
                </Button>
            </div>
        </section>
    )
}