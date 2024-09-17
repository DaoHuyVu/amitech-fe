import bg1 from '../../../assets/images/image 177.png'
import bg2 from '../../../assets/images/image 204.png'
import bg3 from '../../../assets/images/image 205.png'
import bg4 from '../../../assets/images/image 206.png'
import bg5 from '../../../assets/images/image 174.png'
import Button from '../../button/Button'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import Card from '../../card/Card'
import Image47Card from '../../card/Image47Card'
import CardContent from '../../card/CardContent'
import CardCategory from '../../card/CardCategory'
import CardTitle from '../../card/CardTitle'
import CardDescription from '../../card/CardDescription'
export default function News(){
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
            <Card key={index} className='d-flex'>
                <Image47Card src={e.src}/>
                <CardContent style={{backgroundColor : '#F1F7FF',minHeight : '300px'}}>
                    <CardCategory style={{color : '#4d4d4db2',textTransform : 'uppercase'}}>{e.categoryName}</CardCategory>
                    <CardTitle maxLines='1' style={{color : '#4d4d4d'}}>{e.title}</CardTitle>
                    <CardDescription coverRemain='false' style={{color : '#4d4d4db2'}}>{e.content}</CardDescription>
                    <Link to='#' style={{color : '#00c2ff',fontWeight : 'bold'}}>
                        Xem thêm &gt;&gt;
                    </Link>
                </CardContent>
            </Card>
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
                <Card className='d-flex'>
                <Image47Card src={e.src}/>
                <CardContent style={{backgroundColor : '#F1F7FF'}}>
                    <CardCategory style={{color : '#4d4d4db2',textTransform : 'uppercase'}}>{e.categoryName}</CardCategory>
                    <CardTitle maxLines='3' style={{color : '#4d4d4d'}} className='fs-5'>{e.title}</CardTitle>
                    <Link to='#' style={{color : '#00c2ff',fontWeight : 'bold'}}>
                        Xem thêm &gt;&gt;
                    </Link>
                </CardContent>
                </Card>
            </div>
        )
    })
    return(
        <section id="home_news">
            <div className="container d-flex flex-column align-items-center">
                <div className="text-center pb-4">
                    <h5 style={{color : '#4D4D4D',fontWeight : '700'}}>TIN TỨC VÀ SỰ KIỆN</h5>
                </div>
                <div className="row g-3 w-100 h-100 pb-4 d-flex flex-row">
                    <div className="col-12 col-xxl-6">
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