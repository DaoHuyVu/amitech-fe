import bg1 from '../../../assets/images/image 222.png'
import bg2 from '../../../assets/images/image 221.png'
import icon1 from '../../../assets/images/sumenh.png'
import icon2 from '../../../assets/images/tamnhin.png'
import icon3 from '../../../assets/images/giatricotloi.png'
export default function IntroductionSection3(){
    const paragraphData = [
        {
            icon : icon1,
            title : 'Sứ mệnh',
            text : 'Mang theo làn sóng công nghệ mới trong cuộc cách mạng công nghệ 4.0, nỗ lực phát triển những Sản phẩm - Dịch vụ - Giải pháp Công nghệ Chất lượng cao "Make in Vietnam", đem lại những giá trị vượt trội cho Khách hàng, góp phần xây dựng một Việt Nam hùng cường.'
        },
        {
            icon : icon2,
            title : 'Tầm nhìn',
            text : 'Trở thành một Công ty Công nghệ hàng đầu khu vực trong lĩnh vực Ứng dụng Công nghệ trong Quản lý và Sản xuất Công nghiệp.'
        },
    ]
    const paragraph = paragraphData.map((e,index) => {
        const name = `icon${index+1}`
        return (
            <div className='d-flex align-items-start column-gap-3' key={index}>
                <div className='p-3 d-flex justify-content-center align-items-center' style={{width : '70px',height : '70px',backgroundColor : '#006CE7',borderRadius : '5px'}}>
                    <img src={e.icon} alt={name}/>
                </div>
                <div className='pb-4'>
                    <h6 style={{color : '#006CE7',fontWeight : '700'}}>{e.title}</h6>
                    <p style={{color : '#4D4D4D'}}>{e.text}</p>
                </div>
            </div>
        )
    })
    const listData = [
        {
            icon : icon3,
            title : 'Giá trị cốt lõi',
            list : [
                {
                    title : 'Tin cậy',
                    text : 'Các nền tảng, sản phẩm và dịch vụ AMITECH mang lại cho khách hàng đều có độ tin cậy cao, con người AMITECH với tri thức và văn hóa cao luôn mang lại cho khách hàng cảm giác tin cậy trong giao dịch và chuyển giao tri thức, công nghệ.'
                },
                {
                    title : 'Tiện ích',
                    text : 'Các nền tảng, sản phẩm và dịch vụ AMITECH luôn thỏa mãn mọi yêu cầu nghiệp vụ của khách hàng. Khách hàng có thể dễ dàng tiếp cận và sử dụng nền tảng, sản phẩm, dịch vụ của AMITECH bất cứ khi nào, bất cứ nơi nào. Đội ngũ tư vấn, hỗ trợ khách hàng của AMITECH luôn sẵn sàng phục vụ 365 ngày/năm và 24 giờ/ngày.'
                },
                {
                    title : 'Tận tình',
                    text : 'Con người AMITECH từ những người phát triển nền tảng, sản phẩm đến những người kinh doanh tư vấn và các bộ phận khác luôn luôn tận tâm, tận lực phục vụ vì lợi ích của khách hàng, làm cho khách hàng tin cậy và yêu mến như một người bạn, một người đồng hành trong sự nghiệp.'
                }
            ]
        }
    ]
    const lists = listData.map((e,index) => {
        const listItems = e.list.map((element,index) => <li className='pb-3' key={index}><p><b>{element.title}: </b>{element.text}</p></li>)
        return (
            <div className='d-flex align-items-start column-gap-3' key={index}>
                <div className='p-3 d-flex justify-content-center align-items-center' style={{width : '70px',height : '70px',backgroundColor : '#006CE7',borderRadius : '5px'}}>
                    <img src={e.icon} alt='icon3'/>
                </div>
                <div>
                    <h6 style={{color : '#006CE7',fontWeight : '700'}}>{e.title}</h6>
                    <ul  style={{color : '#4d4d4d'}}>
                        {listItems}
                    </ul>
                </div>
            </div>
        )
    })

    return(
        <section id='su-menh'>
            <div className="container">
                <h2 style={{color : '#4d4d4d',fontWeight : '700',fontFamily : 'Roboto'}} className='text-center pb-4'>SỨ MỆNH - TẦM NHÌN - GIÁ TRỊ CỐT LÕI</h2>
                <div className='container__item--zigzag'>
                    <div className="row row-gap-3 pb-4">
                        <div className='col-12 col-lg-6'>
                            <img src={bg1} alt='background1' width='100%'/>
                        </div>
                        <div className='col-12 col-lg-6'>
                            {paragraph}
                        </div>
                    </div>
                    <div className="row row-gap-3 ">
                        <div className='col-12 col-lg-6'>
                            <img src={bg2} alt='background2' width='100%'/>
                        </div>
                        <div className='col-12 col-lg-6'>
                            {lists}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}