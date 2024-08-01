import Slider from 'react-slick'
import Button from '../../button/Button'
import { Link } from 'react-router-dom'
import parser from 'html-react-parser'
import { getPostImage,getPostImageArray } from '../../../services/util'
export default function ProjectDetailSection1({project}){
    const settings = {
        infinite : false,
        speed : 1000,
        slidesToShow : 1,
        slidesToScroll : 1
    }
    const carouselItems = getPostImageArray(project)
    return(
        <section id="project-detail__section1">
            <div className="container-fluid">
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
                    <div className='col-12 col-lg-6'>
                        <h4 style={{color : '#4d4d4d',fontWeight : '700'}}>{project.attributes.postTitle}</h4>
                        <div style={{color : '#4d4d4d'}} className='mb-0 pt-1 pb-3'>
                           {parser(project.attributes.postDescription)}
                        </div>
                        <Button >
                            <Link style={{color : 'white'}}>Liên hệ &gt;&gt;</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}