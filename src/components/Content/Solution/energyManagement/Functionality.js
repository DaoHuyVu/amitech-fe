import maytinh from '../../../../assets/images/may tinh 1.png'
import carouselImg from '../../../../assets/images/Loại năng lượng sử dụng 1.png'
import Slider from 'react-slick'
export default function Functionality(){
    const settings = {
        infinite : true,
        slidesToShow : 1,
        slidesToScroll : 1,
        speed : 1000
    }
    const carouselItems = [carouselImg,carouselImg,carouselImg]
    return(
        <section id="solution-detail__functionality">
            <div className="container-fluid " >
            <h4 className='fw-bold text-center pb-3' style={{color : '#4d4d4d'}}>TÍNH NĂNG</h4>
            <div className="row row-gap-3">
                <div className="col-12 col-lg-6 fs-5" >
                    <p style={{color : '#006ce7'}}>1. Đo và thu thập các thông số</p>
                    <p style={{color : '#4d4d4d'}}>
                        Đo và thu thập các thông số
                        hoạt động của hệ thống sử
                        dụng Năng lượng: Thông số
                        điện, nhiệt độ, lưu lượng...
                    </p>
                    <p style={{color : '#006ce7'}}>1. Đo và thu thập các thông số</p>
                    <p style={{color : '#4d4d4d'}}>
                        Đo và thu thập các thông số
                        hoạt động của hệ thống sử
                        dụng Năng lượng: Thông số
                        điện, nhiệt độ, lưu lượng...
                    </p>
                    <p style={{color : '#006ce7'}}>1. Đo và thu thập các thông số</p>
                    <p style={{color : '#4d4d4d'}}>
                        Đo và thu thập các thông số
                        hoạt động của hệ thống sử
                        dụng Năng lượng: Thông số
                        điện, nhiệt độ, lưu lượng...
                    </p>
                </div>
                <div className='col-12 col-lg-6 '>
                    <div className="retained-4-7-image-wrapper">
                        <img src={maytinh} alt='Computer' className='retained-4-7-image'/>
                            <Slider 
                                {...settings} 
                                className='custom-carousel position-absolute' 
                                style={
                                    {
                                        width : 'calc(605/708 * 100%)',
                                        top : '3%',
                                        left : '7.274%'
                                    }
                                }>
                                {carouselItems.map((e,index) => {
                                    return (
                                       <div className="aspect-3-5-image-wrapper" key={index}>
                                            <img src={e} alt='Computer' className='aspect-retained-image h-100' />
                                       </div>
                                    )
                                })}
                            </Slider>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}