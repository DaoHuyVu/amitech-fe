import Slider from 'react-slick'
import img1 from '../../../assets/images/image 212.png'
import img2 from '../../../assets/images/image 213.png'
import img3 from '../../../assets/images/image 214.png'
import img4 from '../../../assets/images/image 215.png'

export default function IntroductionSetion5(){
    const data = [
        {
            img : img1,
            title : 'AMITECH trở thành đối tác chính thức của MITSUBISHI ELECTRIC VIETNAM'
        },
        {
            img : img2,
            title : 'Chứng chỉ Năng lượng tái tạo'
        },
        {
            img : img3,
            title : 'Thiết bị đo Năng Lượng - EcoMonitorLight'
        },
        {
            img : img4,
            title : 'Thiết bị đo Năng Lượng - EcoMonitorLight'
        },
    ]
    const settings = {
        dots: true,
        speed: 2000,    
        infinite : true,
        autoPlay : true,
        autoPlaySpeed : 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive : [
            {
                breakpoint : 1400,
                settings : {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint : 992,
                settings : {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint : 768,
                settings : {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const slides = data.map((e,index)=>{
        return(
            <div className='p-2' key={index}>
                <img src={e.img} alt = 'img' width='100%' height='200px' />
                <div className='p-3' style={{height : 'calc(88px + 1rem)',backgroundColor : '#666666'}} >
                    {e.title}
                </div>
            </div>
        )
    })
    return(
        <section id='chung-chi'>
            <h2 className="text-center fw-bold pb-4" style={{color : '#4d4d4d'}}>CHỨNG NHẬN / CHỨNG CHỈ</h2>
                <div className='container'>
                   <div className='custom-slider '>
                    <Slider {...settings}>
                        {slides}
                    </Slider>
                   </div>
                </div>
        </section>
    )
}