import Button from "../../button/Button"
import { Link } from "react-router-dom"
import img1 from '../../../assets/images/image 103-product.png'
import Slider from "react-slick"
export default function ProductDetailSection1(){
    const carouselItem = [img1,img1,img1]
    const settings = {
        customPaging: function(i) {
            return (
              <a className="retained-4-7-image-wrapper d-block" role='none'>
                <img src={`${carouselItem[i]}`} alt='Carousel Item Img' className="retained-4-7-image" />
              </a>
            );
        },
        infinite : false,
        dots : true,
        dotsClass : 'slick-dots slick-thumb sided-navigation',
        speed : 1000,
        slidesToShow : 1,
        slidesToScroll : 1
    }
    const productDetail = <div style={{color : '#4d4d4d'}}>
        <h4 className="pb-3">Máy chủ thu thập dữ liệu tiết kiệm Năng lượng</h4>
        <p className="pb-3">Gửi dữ liệu quản lý ngày tháng trên Web đến EcoWebServerIII.</p>

        <p className="pb-4">Sử dụng mạng nội bộ thông qua máy tính cá nhân thông dụng cùng với EcoWebServerIII. EcoWebServerIII tạo ra nhiều hệ thống "Trực quan hóa quản lý năng lượng" và hỗ trợ hoạt động tiết kiệm năng lượng của bạn.</p>

        <Button >
            <Link style={{color : 'white'}}>Liên hệ &gt;&gt;</Link>
        </Button>
    </div>
    return(
        <section id="product-detail__section1">
            <div className="container">
                <div className="row row-gap-3">
                    <div className="col-12 col-lg-7 ">
                        <div className='custom-carousel sided-carousel'>
                            <Slider {...settings} >
                                {
                                    carouselItem.map((e,index) => {
                                        return (
                                            <div key={index} className='retained-4-7-image-wrapper'>
                                                <img 
                                                    src={e} alt='Product carousel item' className='retained-4-7-image'
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