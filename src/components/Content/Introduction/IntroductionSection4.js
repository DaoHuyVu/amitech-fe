import img1 from '../../../assets/images/hinhanhhoatdong1.png'
import Button from "../../button/Button"
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
export default function IntroductionSection4(){
    const data = [
        {
            image : img1,
            time : 'Thứ 3, 15/08/2023',
            title : 'Amitech tham gia hội chợ ENTECH Hà Nội 2023'
        },
        {
            image : img1,
            time : 'Thứ 3, 15/08/2023',
            title : 'Amitech tham gia hội chợ ENTECH Hà Nội 2023'
        },
        {
            image : img1,
            time : 'Thứ 3, 15/08/2023',
            title : 'Amitech tham gia hội chợ ENTECH Hà Nội 2023'
        },
        {
            image : img1,
            time : 'Thứ 3, 15/08/2023',
            title : 'Amitech tham gia hội chợ ENTECH Hà Nội 2023'
        },
    ]

    const settings = {
        className : 'center',
        centerMode : true,
        centerPadding : '0px',
        infinite : true,
        slidesToShow: 3,
        slidesToScroll : 1,
        speed: 500,
        responsive : [
            {
                breakpoint : 1200,
                settings : {
                    slidesToShow : 2,
                    centerMode : false,
                }
            },
            {
                breakpoint : 768 ,
                settings : {
                    slidesToShow : 1
                }
            }
        ]
      };
    const slides = data.map((e,index) => {
        return (
            <div key={index} className='d-flex flex-column px-2 position-relative'>
               <div className="counter-bottom-image-wrapper"> 
                    <img src={e.image} className="counter-bottom-image w-100" alt='img'/>
                    <div className="counter-bottom-image__dimmed-bottom invisible">
                        <p>{index+1}/{data.length} ảnh</p>
                    </div>
               </div>
               <div className='carousel-item-infomation invisible'>
                <p style={{color : '#ffffffb2',paddingBottom : '0.5rem'}}>{e.time}</p>
                <h5>{e.title}</h5>
               </div>
            </div>
        )
    })
    return(
        <section id="introduction__section4">
            <div className="container-fluid d-flex flex-column align-items-center ">
                <h2 className="text-center ">Hình ảnh hoạt động</h2>
                    <div className='w-100 pb-4 scaled-carousel custom-carousel' >
                        <Slider {...settings}>
                            {slides}
                        </Slider>
                    </div>
                    <Button style={{backgroundColor : '#00c2ff'}}>
                        <Link to='/hinh-anh-hoat-dong' style={{color : 'white'}}>
                            Xem tất cả &gt;&gt;
                        </Link>
                    </Button>
                </div>
                
        </section>
    )
}