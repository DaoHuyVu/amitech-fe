import bg1 from '../../../assets/images/image 257.png'
import bg2 from '../../../assets/images/image 255.png'
import bg3 from '../../../assets/images/image 256.png'
import bg4 from '../../../assets/images/image 254.png'
import DetailCard from "../../card/DetailCard"
import Button from '../../button/Button'
export default function HomeSection5(){
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
            <div className="col-12 col-md-6 col-xl-3" key={index}>
                <DetailCard src={e.src} title = {e.title} >
                    <ul>
                        <li>
                            <p>{e.customerName}</p>
                        </li>
                        <li>
                            <p>{e.place}</p>
                        </li>
                        <li>
                            <p>{e.time}</p>
                        </li>
                    </ul>
                </DetailCard>
            </div>
        )
    }) 
    return(
        <section id="section5">
            <div className="container d-flex flex-column align-items-center">
                <div className="text-center pb-4">
                    <h5 style={{fontWeight : '700'}}>DỰ ÁN TIÊU BIỂU</h5>
                </div>
                <div className="row g-3 pb-4">
                    {columns}
                </div>
                <Button
                    style={{backgroundColor : '#006CE7'}}>
                        Xem thêm &gt;&gt;
                </Button>
            </div>
        </section>
    )
}