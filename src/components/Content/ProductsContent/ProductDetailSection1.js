import Button from "../../button/Button"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import parser from 'html-react-parser'
import { getPostImage, getPostImageArray } from "../../../services/util"
export default function ProductDetailSection1({data}){
    const carouselItems = getPostImageArray(data)
    const settings = {
        customPaging: function(i) {
            return (
              <button className="aspect-3-4-image-wrapper d-block p-0" role='none'>
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
        <h4 className="pb-3">{data.attributes.postTitle}</h4>
        <div className="pb-3">{parser(data.attributes.postDescription)}</div>
        <Button >
            <Link style={{color : 'white'}}>Liên hệ &gt;&gt;</Link>
        </Button>
    </div>
    return(
        <section id="product-detail__section1">
            <div className="container-fluid">
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