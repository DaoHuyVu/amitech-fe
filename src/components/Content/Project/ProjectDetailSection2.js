import img1 from '../../../assets/images/image 231.png'
import Button from '../../button/Button'
import { Link } from 'react-router-dom'
export default function ProjectDetailSection2(){
    const content = <>
        <p className='pb-3'>
        AMITECH đã thực hiện xây dựng phần mềm giám sát điều khiển trung tâm iNERGY để thực hiện Giám sát, điều khiển, truy xuất, xác định sự cố, truyền nhận dữ liệu về trung tâm, kết nối mạng lưới điện thông minh.
        </p>
        <p className='pb-3'>
        Phần mềm được xây dựng giúp người vận hành có khả năng giám sát điều khiển thiết bị một cách trực quan và dễ dàng. Quản lý tổng thể hệ thống điện các thông số đo lường điện (35 kV, 6kV, 1140V, 690V), các trạng thái hoạt động thiết bị của mạng thông qua thay đổi màu của dây và thiết bị. Phần mềm được bảo mật số liệu, phân quyền sử dụng và cấu hình hệ thống. 
        </p>
        <p className='pb-3'>
         Ngoài ra, AMITECH đã cung cấp tủ truyền thông trung tâm, tủ điều khiển trung tâm và các nguyên vật liệu để thí nghiệm chạy thử nghiệm, phục vụ cho việc điều khiển giám sát thông minh trạm cung cấp điện 35/6kV của đề tài.
        </p>
        <img className='pb-3' src={img1} alt='Content Img' width='100%'/>
        <img  src={img1} alt='Content Img' width='100%'/>
    </>
    const relatedProject = [
        {
            image : img1,
            title : 'Cung cấp Thiết bị mới thuộc đề tài "Nghiên cứu thiết kế, chế tạo hệ thống quản lý, vận hành cung cấp điện thông minh phù hợp...',
            customer : 'Viện Khoa học Công nghệ Mỏ - VINACOMIN',
            place : 'Công ty CP Chế tạo máy - Vinacomin, số 486, đường Trần Phú, phường Cẩm Thuỷ, TP Cẩm Phả, tỉnh Quảng Ninh, Việt Nam',
            date : '2023'
        },
        {
            image : img1,
            title : 'Cung cấp Thiết bị mới thuộc đề tài ',
            customer : 'Viện Khoa học Công nghệ Mỏ - VINACOMIN',
            place : 'Công ty CP Chế tạo máy ',
            date : '2023'
        },
    ]
    const cols = relatedProject.map((e,index) => {
        return (
            <div className='col-12 col-md-6 col-xl-12 d-flex flex-column' key={index}>
                <img src={e.image} alt='Project Img' width='100%'/>
                <div className='p-3 d-flex flex-column row-gap-2 flex-grow-1' style={{backgroundColor : '#f1f7ff'}}>
                    <h4 style={{color : '#4d4d4d'}} className='text__weight--lg'>{e.title}</h4>
                    <div className='flex-grow-1'>
                        <ul style={{color : '#4d4d4db2'}}>
                            <li>
                                <p><b>Tên khách hàng:</b> {e.customer}</p>
                            </li>
                            <li>
                                <p><b>Địa điểm thực hiện:</b> {e.place}</p>
                            </li>
                            <li>
                                <p><b>Thời gian thực hiện:</b> {e.date}</p>
                            </li>
                        </ul>
                    </div>
                    <Button style={{backgroundColor : 'transparent',color : '#00c2ff',border : 'none'}}>
                        <Link  to='/du-an-tieu-bieu/chi-tiet' >
                            Xem chi tiết &gt;&gt;
                        </Link>
                    </Button>
                </div>
            </div>
        )
    })
    return(
        <section id="project-detail__section2">
            <div className="container">
                <div className="row row-gap-5 gx-lg-5">
                    <div className='col-12 col-xl-9'>
                        {content}
                    </div>
                    <div className='col-12 col-xl-3'>
                        <h4 className='text-center fw-bold text-xl-start'>DỰ ÁN LIÊN QUAN</h4>
                        <div className='row row-gap-3'>
                            {cols}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}