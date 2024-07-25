import bg1 from '../../../assets/images/image 179.png'
import bg2 from '../../../assets/images/image 180.png'
import bg3 from '../../../assets/images/image 181.png'
import bg4 from '../../../assets/images/image 182.png'
import bg5 from '../../../assets/images/image 183.png'
import bg6 from '../../../assets/images/image 184.png'
import bg7 from '../../../assets/images/image 185.png'
import Button from '../../button/Button'
import HoverableHeroImage from '../../heroImage/HoverableHeroImage'
import { Link } from 'react-router-dom'
export default function Solution(){
    const data = [
        {title : 'Quản lý năng lượng - iNERGY',src : bg1 , content : "Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công..."},
        {title : 'Giám sát sản xuất - AMWORKING',src : bg1, content : "Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công..."},
        {title : 'Giám sát điều khiển thiết bị phụ trợ',src : bg2, content : "Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công..."},
        {title : 'Cổng thông tin điện tử - AMI.Portal',src : bg3,content : "Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công..."},
        {title : 'Quản lý kho - AMI.S',src : bg4,content : "Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công..."},
        {title : 'Giải pháp quản lý 5S',src : bg5,content : "Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công..."},
        {title : 'Quản lý bảo trì - iMAINT',src : bg6,content : "Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công..."},
        {title : 'Hệ thống CSDL báo cáo tiêu thụ Năng lượng trọng điểm Quốc gia',src : bg7,content : "Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công..."},
    ]
    const heroImages = data.map( (e,index)=>{
        return (
           <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 ' key = {index}>
                <HoverableHeroImage className='hoverable-hero-image--bg-dim ' src={e.src} title = {e.title}>
                    <p>{e.content}</p>
                </HoverableHeroImage>
           </div>
        )
    })
    return(
        <section>
            <div className="container">
                <div className="d-flex flex-column align-items-center ">
                    <div className='text-center'>
                        <h4 className='text__weight--lg' style={{color : '#4D4D4D'}}>
                                Giải pháp chuyển đổi số
                        </h4>
                        <p className="mw-100" style={{color : 'black'}}>
                        Amitech cung cấp các giải pháp chuyển đổi số hàng đầu, giúp doanh nghiệp chuyển đổi số toàn diện, nhanh chóng, tiết kiệm
                        </p>
                    </div>
                    <div className="row g-3 my-4">
                        {heroImages}
                    </div>
                    <Button>
                           <Link to='/giai-phap-chuyen-doi-so' >
                                <p style={{color : 'white'}}>
                                    Xem thêm &gt;&gt;
                                </p>
                           </Link>
                    </Button>
                </div>
            </div>
        </section>  
    )
}