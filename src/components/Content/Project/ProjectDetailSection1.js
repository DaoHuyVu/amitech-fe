import img1 from '../../../assets/images/image 257.png'
import Slider from 'react-slick'
import Button from '../../button/Button'
import { Link } from 'react-router-dom'
export default function ProjectDetailSection1(){
    const settings = {
        infinite : false,
        speed : 1000,
        slidesToShow : 1,
        slidesToScroll : 1
    }
    const prjDetail = {
        image : img1,
        title : 'Cung cấp Thiết bị mới thuộc đề tài "Nghiên cứu thiết kế, chế tạo hệ thống quản lý, vận hành cung cấp điện thông minh phù hợp với điều kiện sản xuất của Tập đoàn Công nghiệp Than - Khoáng sản Việt Nam"',
        customer : 'Viện Khoa học Công nghệ Mỏ - VINACOMIN',
        place : 'Công ty CP Chế tạo máy - Vinacomin, số 486, đường Trần Phú, phường Cẩm Thuỷ, TP Cẩm Phả, tỉnh Quảng Ninh, Việt Nam',
        date : '2023'
    }
    const carouselItem = [
        img1,img1,img1,
    ]
    return(
        <section id="project-detail__section1">
            <div className="container">
                <div className="row row-gap-3">
                    <div className="col-12 col-lg-6 ">
                        <div className='custom-carousel'>
                            <Slider {...settings} >
                                {
                                    carouselItem.map((e,index) => {
                                        return (
                                            <div key={index} className='retained-4-7-image-wrapper'>
                                                <img 
                                                    src={e} alt='Project carousel item' className='retained-4-7-image'
                                                    />
                                            </div>
                                        )
                                    })
                                }
                            </Slider>   
                        </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h4 style={{color : '#4d4d4d',fontWeight : '700'}}>{prjDetail.title}</h4>
                        <ul style={{color : '#4d4d4d'}} className='mb-0 pt-1 pb-3'>
                            <li>
                                <p><b>Tên khách hàng: </b>{prjDetail.customer}</p>
                            </li>
                            <li>
                                <p><b>Địa điểm thực hiện: </b>{prjDetail.place}</p>
                            </li>
                            <li>
                                <p><b>Thời gian thực hiện: </b>{prjDetail.date}</p>
                            </li>
                        </ul>
                        <Button >
                            <Link style={{color : 'white'}}>Liên hệ &gt;&gt;</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}