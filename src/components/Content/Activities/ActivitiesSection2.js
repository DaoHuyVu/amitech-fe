import img1 from '../../../assets/images/hinhanhhoatdong1.png'
import Slider from 'react-slick'
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
        slidesToShow: 3,
        speed: 500,
        responsive : [
            {
                breakpoint : 1200,
                settings : {
                    slidesToShow : 2
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
            <div key={index} className='d-flex flex-column p-2 position-relative'>
               <div className="counter-bottom-image-wrapper "> 
                    <img src={e.image} className="w-100" alt='img'/>
                    <div className="counter-bottom-image__dimmed-bottom invisible">
                        <p>1/{data.length} ảnh</p>
                    </div>
               </div>
               <div className='carousel-item-infomation invisible '>
                <p style={{color : '#4d4d4db2',paddingBottom : '0.5rem'}}>{e.time}</p>
                <h5 style={{color : '#4d4d4d'}}>{e.title}</h5>
               </div>
            </div>
        )
    })
    return(
        <section id="activities__section2">
            <div className="container d-flex flex-column align-items-center" >
                    <div className='w-100 scaled-carousel custom-carousel'>
                        <Slider {...settings}>
                            {slides}
                        </Slider>
                    </div>
                </div>
                
        </section>
    )
}