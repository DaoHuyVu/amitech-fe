import Slider from 'react-slick'
import Button from '../../button/Button'
import { Link } from 'react-router-dom'
import parser from 'html-react-parser'
import { getPostImage,getPostImageArray } from '../../../services/util'
import CardContent from '../../card/CardContent'
import CardTitle from '../../card/CardTitle'
import CardDescription from '../../card/CardDescription'
import { useTranslation } from 'react-i18next'
export default function ProjectDetailSection1({project}){
    const {t} = useTranslation()
    const settings = {
        infinite : false,
        speed : 1000,
        slidesToShow : 1,
        slidesToScroll : 1
    }
    const carouselItems = getPostImageArray(project)
    return(
        <section id="project-detail__section1">
            <div className="container">
                <div className="row row-gap-3">
                    <div className="col-12 col-lg-6 ">
                        <div className='custom-carousel'>
                            <Slider {...settings} >
                                {
                                    carouselItems.map((e) => {
                                        return (
                                            <div key={e.id} className='retained-4-7-image-wrapper'>
                                                <img 
                                                    src={getPostImage(e)} alt='Project carousel item' className='retained-4-7-image'
                                                    />
                                            </div>
                                        )
                                    })
                                }
                            </Slider>   
                        </div>
                    </div>
                    <CardContent className='col-12 col-lg-6'>
                        <CardTitle maxLines={6} style={{color : '#4d4d4d',fontWeight : '700'}}>{project.attributes.postTitle}</CardTitle>
                        <CardDescription style={{color : '#4d4d4d'}} className='mb-0 pt-1 pb-3'>{parser(project.attributes.postDescription)}</CardDescription>
                        <Link to='#'>
                            <Button >
                              {t('button.lien-he')}  &gt;&gt;
                            </Button>
                        </Link>
                    </CardContent>
                </div>
            </div>
        </section>
    )
}