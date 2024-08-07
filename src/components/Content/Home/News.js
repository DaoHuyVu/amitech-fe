import bg1 from '../../../assets/images/image 177.png'
import bg2 from '../../../assets/images/image 204.png'
import bg3 from '../../../assets/images/image 205.png'
import bg4 from '../../../assets/images/image 206.png'
import bg5 from '../../../assets/images/image 174.png'
import Button from '../../button/Button'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

export default function HomeSection6(){
    const carouselData = [
        {
            categoryName : 'Tin hoạt động của Amitech',
            title : 'Ứng dụng phần mềm iNERGY AMS20 trong quản lý năng lượng',
            content : 'Trong khuôn khổ các hoạt động của triển lãm quốc tế công nghệ năng lượng - môi trường Hà Nội năm 2022, nhiều giải pháp công nghệ đã được giới thiệu đến các doanh nghiệp, trong đó có giải pháp về hệ thống phần mềm quản lý năng lượng...',
            src : bg1
        },
        {
            categoryName : 'Tin hoạt động của Amitech ',
            title : 'Ứng dụng phần mềm iNERGY AMS20 trong quản lý năng lượng',
            content : 'Trong khuôn khổ các hoạt động của triển lãm quốc tế công nghệ năng lượng - môi trường Hà Nội năm 2022, nhiều giải pháp công nghệ đã được giới thiệu đến các doanh nghiệp, trong đó có giải pháp về hệ thống phần mềm quản lý năng lượng...',
            src : bg1
        },
        {
            categoryName : 'Tin hoạt động của Amitech ',
            title : 'Ứng dụng phần mềm iNERGY AMS20 trong quản lý năng lượng',
            content : 'Trong khuôn khổ các hoạt động của triển lãm quốc tế công nghệ năng lượng - môi trường Hà Nội năm 2022, nhiều giải pháp công nghệ đã được giới thiệu đến các doanh nghiệp, trong đó có giải pháp về hệ thống phần mềm quản lý năng lượng...',
            src : bg1
        }
    ]
    const carouselItems = carouselData.map((e,index) => {
       return (
            <div key={index} className='h-100 d-flex flex-column'>
                <div className='retained-4-7-image-wrapper '>
                    <img src={e.src} loading='lazy' alt='Carousel Item' className='retained-4-7-image'/>
                </div>
                <div style={{backgroundColor : '#f1f7ff'}} className='p-3 flex-grow-1'>
                    <p className='pb-2' style = {{color : '#4D4D4DB2',fontSize : '0.8rem'}}>{e.categoryName}</p>
                    <h5 className='pb-2' style={{color : '#4D4D4D'}}>{e.title}</h5>
                    <div className='pb-2' style= {{color : '#4D4D4DB2'}}>{e.content}</div>
                    <span style={{color : '#00C2FF'}}>Xem chi tiết &gt;&gt;</span>
                    <div style={{height : '24px'}}>
                    </div>
                </div>
            </div>
       )
    })
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
    const newsData = [
        {
            categoryName : 'Tin hoạt động của Amitech',
            title : 'AMITECH trở thành đối tác chính thức của MITSUBISHI ELECTRIC VIETNAM',
            src : bg2
        },
        {
            categoryName : 'Tin hoạt động của Amitech',
            title : 'AMITECH tham gia Hội chợ ENTECH Hà Nội 2023',
            src : bg3
        },
        {
            categoryName : 'Tin hoạt động của Amitech',
            title : 'Quản lý năng lượng iNERGY',
            src : bg4
        },
        {
            categoryName : 'Tin tổng hợp',
            title : 'Thương thảo hợp đồng triển khai giải pháp iNergy kết hợp khảo sát các vị trí lắp đặt thiết bị',
            src : bg5
        }   
    ]
    const newsColumns = newsData.map((e,index) => {
        return (
            <div className='col-12 col-md-6' key={index}>
                <div className='d-flex flex-column h-100' style={{backgroundColor : '#f1f7ff'}}>
                    <div className='retained-4-7-image-wrapper'>
                        <img loading='lazy' src={e.src} alt='News' className='aspect-retained-image'/>
                    </div>
                    <div className='flex-grow-1 d-flex flex-column p-3'>
                        <p className='pb-2' style = {{color : '#4D4D4DB2',fontSize : '0.8rem'}}>{e.categoryName}</p>
                        <h5 className='pb-2 flex-grow-1' style={{color : '#4D4D4D'}}>{e.title}</h5>
                        <span style={{color : '#00C2FF'}}>Xem chi tiết &gt;&gt;</span>
                    </div>
                </div>
            </div>
        )
    })
    return(
        <section id="home_news">
            <div className="container-fluid d-flex flex-column align-items-center">
                <div className="text-center pb-4">
                    <h5 style={{color : '#4D4D4D',fontWeight : '700'}}>TIN TỨC VÀ SỰ KIỆN</h5>
                </div>
                <div className="row g-3 w-100 h-100 pb-4 d-flex flex-row">
                    <div className="col-12 col-xxl-6" style={{minHeight : '600px'}}>
                        <Slider {...carouselSettings} className='custom-carousel h-100 custom-carousel__button--disabled'>
                            {carouselItems}
                        </Slider>
                    </div>
                    <div className="col-12 col-xxl-6">
                        <div className="row gy-3 ">
                            {newsColumns}
                        </div>
                    </div>
                </div>
                <Button
                    style={{backgroundColor : '#006CE7'}}>
                    <Link to='/tin-tuc'>
                        <p style={{color : 'white'}}>Xem thêm &gt;&gt;</p>
                    </Link>
                </Button>
            </div>
        </section>
    )
}