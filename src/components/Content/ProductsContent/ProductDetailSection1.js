import Button from "../../button/Button"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import parser from 'html-react-parser'
import { getPostImage, getPostImageArray } from "../../../services/util"
import CardContent from "../../card/CardContent"
import CardTitle from "../../card/CardTitle"
import CardDescription from "../../card/CardDescription"
import { useTranslation } from "react-i18next"
export default function ProductDetailSection1({data}){
    const {t} = useTranslation()
    const carouselItems = getPostImageArray(data)
    const settings = {
        customPaging: function(i) {
            return (
              <button className="aspect-3-4-image-wrapper d-block" role='none'>
                <img src={getPostImage(carouselItems[i])} alt='Carousel Item' className="aspect-retained-image" />
              </button>
            );
        },
        infinite : false,
        dots : true,
        dotsClass : 'slick-dots slick-thumb sided-navigation',
        speed : 1000,
        slidesToShow : 1,
        slidesToScroll : 1,
        responsive : [
            {
                breakpoint : 576,
                settings : {
                    dots : false
                }
            }
        ]
    }
    const productDetail = <div style={{color : '#4d4d4d'}}>
        <CardContent>
            <CardTitle>{data.attributes.postTitle}</CardTitle>
            <CardDescription>{parser(data.attributes.postDescription)}</CardDescription>
            <Link to='#'>
                <Button>
                    {t('button.lien-he')} &gt;&gt;
                </Button>
            </Link>
        </CardContent>
    </div>
    return(
        <section id="product-detail__section1">
            <div className="container">
                <div className="row row-gap-3">
                    <div className="col-12 col-lg-7 ">
                        <div className='custom-carousel sided-carousel '>
                            <Slider {...settings} >
                                {
                                    carouselItems.map((e) => {
                                        return (
                                            <div key={e.id} className='retained-4-7-image-wrapper'>
                                                <img 
                                                    src={getPostImage(e)} alt='Product carousel item' className='retained-4-7-image'
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </Slider>   
                        </div>
                    </div>
                    <div className='col-12 col-lg-5'>
                        {productDetail}
                    </div>
                </div>
            </div>
        </section>
    )
}