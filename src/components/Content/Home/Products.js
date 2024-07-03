import bg1 from '../../../assets/images/image 103.png'
import bg2 from '../../../assets/images/eco-plus 1.png'
import bg3 from '../../../assets/images/image 207.png'
import bg4 from '../../../assets/images/image 186.png'
import bg5 from '../../../assets/images/image 187.png'
import bg6 from '../../../assets/images/image 208.png'
import bg7 from '../../../assets/images/image 188.png'
import bg8 from '../../../assets/images/image 189.png'
import bg9 from '../../../assets/images/image 232.png'
import Button from '../../button/Button'
import Scroller from '../../scroller/Scroller'
export default function Products(){
    const productCategory1 = {
        category : 'THIẾT BỊ GIÁM SÁT ĐIỆN',
        name : 'MITSUBISHI : POWER METER',
        description : 'Các thiết bị giám sát năng lượng hỗ trợ đo lường, thu thập và phân tích mức tiêu thụ năng lượng, đạt ... Các thiết bị giám sát năng lượng hỗ trợ đo lường, thu thập và phân tích mức tiêu thụ năng lượng, đạt ... Các thiết bị giám sát năng lượng hỗ trợ đo lường, thu thập và phân tích mức tiêu thụ năng lượng, đạt ... ',
        products : [
            {
                title : 'Máy chủ thu thập dữ liệu tiết kiệm Năng lượng',
                src : bg1
            },
            {
                title : 'Thiết bị đo Năng Lượng - EcoMonitorPlus',
                src : bg2
            },
            {
                title : 'Thiết bị đo Năng Lượng - EcoMonitorLight',
                src : bg3
            }
        ]
    }
    const productCategory2 =  {
        category : 'THIẾT BỊ GIÁM SÁT KHÍ NÉN',
        name : 'CS INSTRUMENTS : AIR FLOW METER',
        description : 'Các thiết bị giám sát năng lượng hỗ trợ đo lường, thu thập và phân tích mức tiêu thụ năng lượng, đạt ...',
        products : [
            {
                title : 'Đồng hồ đo lưu lượng khí nén',
                src : bg4
            },
            {
                title : 'Cảm biến siêu âm xoáy đo lưu lượng',
                src : bg5
            },
            {
                title : 'Cảm biến lưu lượng khí nén ướt',
                src : bg6
            }
        ]
    }
    const productCategory3 = {
        category : 'THIẾT BỊ GIÁM SÁT TIÊU THỤ NƯỚC',
        name : 'EMS : WATER METER',
        description : 'Các thiết bị giám sát năng lượng hỗ trợ đo lường, thu thập và phân tích mức tiêu thụ năng lượng, đạt ...',
        products : [
            {
                title : 'Đồng hồ nước woltmann kỹ thuật số Hybrid',
                src : bg7
            },
            {
                title : 'Đồng hồ đo lưu lượng đa phương tiện kỹ thuật số',
                src : bg8
            },
            {
                title : 'Máy đo lưu lượng thông minh siêu âm Clamp-On',
                src : bg9
            }
        ]
    }
    return(
        <section id='home__products'>
        <div className="container-fluid">
            <div className='text-center mb-3'>
                <h4 className="text__weight--xl" style={{color : '#4D4D4D'}}>
                        THIẾT BỊ VÀ SẢN PHẨM CÔNG NGHIỆP
                </h4>
                <p className="mw-100 mw-xl-75 mx-auto" style={{color : 'black'}}>
                Amitech cung cấp các giải pháp tiết kiệm Năng Lượng, giúp cho Doanh nghiệp giám sát tiêu thụ năng lượng, tiết kiệm thời gian và chi phí sử dụng, giảm phát thải, bảo vệ môi trường...
                </p>
            </div>  
            <div className='row g-4'>
               <div className='col-12 col-sm-6 col-lg-4 col-xxl-3'>
                <div className='p-3 d-flex flex-column align-items-start' style={{backgroundColor : '#001a6c',height : '350px'}}>
                        <h3 className='text-uppercase pb-2'>{productCategory1.category}</h3>
                        <h5 className='text-uppercase pb-2'>{productCategory1.name}</h5>
                        <div className='flex-grow-1 w-100' style={{marginBottom : '12px'}} >
                            <Scroller >
                                <p>{productCategory1.description}</p>
                            </Scroller>
                        </div>
                        <Button style={{backgroundColor : 'transparent'}}>
                            Xem thêm &gt;&gt;
                        </Button>
                    </div>
               </div>
                {
                    productCategory1.products.map((e,index) => {
                        return(
                            <div className='col-12 col-sm-6 col-lg-4 col-xxl-3' key={index}>
                                <div>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>                         

        </div>
    </section> 
    )
}