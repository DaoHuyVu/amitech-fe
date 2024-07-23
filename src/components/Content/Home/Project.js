import bg1 from '../../../assets/images/image 257.png'
import bg2 from '../../../assets/images/image 255.png'
import bg3 from '../../../assets/images/image 256.png'
import bg4 from '../../../assets/images/image 254.png'
import Button from '../../button/Button'
export default function Project(){
    const data = []
    data.push(
        {
            title : 'Cung cấp Thiết bị mới thuộc đề tài "Nghiên cứu thiết kế, chế tạo hệ thống quản lý, vận hành cung cấp điện thông minh phù hợp...',
            customerName : 'Tên khách hàng : Viện Khoa học Công nghệ Mỏ - VINACOMIN',
            place : 'Địa điểm thực hiện : Công ty CP Chế tạo máy - Vinacomin, số 486, đường Trần Phú, phường Cẩm Thuỷ, TP Cẩm Phả, tỉnh Quảng Ninh, Việt Nam',
            time : 'Thời gian thực hiện : 2023',
            src : bg1
        },
        {
            title : 'Lắp đặt điện khí nước cho khu vực kiểm tra và Kyoso Lab',
            customerName : 'Tên khách hàng : Công ty TNHH Việt Nam KANDENKO',
            place : 'Địa điểm thực hiện : Hà Nội',
            time : 'Thời gian thực hiện : 2023',
            src : bg2
        },
        {
            title : 'Lập Báo cáo mô phỏng hệ thống chân không bình ngưng và tháp làm mát Nhà máy nhiệt điện Mạo Khê',
            customerName : 'Tên khách hàng : Công ty Nhiệt điện Đông Triều - TKV- Chi nhánh TCT Điện lực TKV – CTCP',
            place : 'Địa điểm thực hiện : Nhà máy nhiệt điện Mạo Khê',
            time : 'Thời gian thực hiện : 2023',
            src : bg3
        },
        {
            title : 'Xây dựng bổ sung các phân hệ, chức năng của phần mềm quản lý máy biến áp',
            customerName : 'Tên khách hàng : Công ty Công nghệ thông tin Điện lực miền Bắc – Chi nhánh Tổng công ty Điện lực miền Bắc',
            place : 'Địa điểm thực hiện : Hà Nội',
            time : 'Thời gian thực hiện : 2023',
            src : bg4
        },
    )
    const columns = data.map((e,index) => {
        return (
            <div className="col-12 col-md-6 col-xl-4 col-xxl-3" key={index}>
               <div className='d-flex flex-column h-100'>
                    <div className='aspect-2-3-image-wrapper'>
                        <img src={e.src} alt='Project Img' className='aspect-image'/>
                    </div>
                    <div className='p-3 d-flex flex-column flex-grow-1 align-items-start' style={{backgroundColor:'#f4f9ff1a'}}>
                        <h5 className='lh-base'>{e.title}</h5>
                        <ul style={{color : '#FFFFFFB2'}} className='flex-grow-1'>
                            <li className='pb-3'>
                                <p>{e.customerName}</p>
                            </li>
                            <li className='pb-3'>
                                <p>{e.place}</p>
                            </li>
                            <li>
                                <p>{e.time}</p>
                            </li>
                        </ul>
                        <Button style={{border : 'none',backgroundColor : 'transparent',color : '#00c2ff'}}>
                            Xem thêm &gt;&gt;
                        </Button>
                    </div>
               </div>
            </div>
        )
    }) 
    return(
        <section id="home_project">
            <div className="container-fluid ">
                <div className="text-center pb-4">
                    <h3 style={{fontWeight : '700'}}>DỰ ÁN TIÊU BIỂU</h3>
                </div>
                <div className="row g-3 pb-4">
                    {columns}
                </div>
                <div className='text-center'>
                    <Button
                        style={{backgroundColor : '#00c2ff',border : 'none'}}>
                            Xem thêm &gt;&gt;
                    </Button>
                </div>
            </div>  
        </section>
    )
}