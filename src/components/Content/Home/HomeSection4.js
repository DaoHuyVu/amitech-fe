import HeroImage from "../../heroImage/HeroImage"
import bg1 from '../../../assets/images/image 103.png'
import bg2 from '../../../assets/images/eco-plus 1.png'
import bg3 from '../../../assets/images/image 207.png'
import bg4 from '../../../assets/images/image 186.png'
import bg5 from '../../../assets/images/image 187.png'
import bg6 from '../../../assets/images/image 208.png'
import bg7 from '../../../assets/images/image 188.png'
import bg8 from '../../../assets/images/image 189.png'
import bg9 from '../../../assets/images/image 232.png'
import TitleCard from "../../card/TitleCard"
export default function HomeSection4(){
    return(
        <section id='section4'>
        <div className="container">
            <div className="d-flex flex-column align-items-center">
                <div className='text-center mb-3'>
                    <h4 className="text__weight--lg" style={{color : '#4D4D4D'}}>
                            Thiết bị và sản phẩm công nghiệp
                    </h4>
                    <p className="mw-100" style={{color : 'black'}}>
                    Amitech cung cấp các giải pháp tiết kiệm Năng Lượng, giúp cho Doanh nghiệp giám sát tiêu thụ năng lượng, tiết kiệm thời gian và chi phí sử dụng, giảm phát thải, bảo vệ môi trường...
                    </p>
                </div>
            </div>
            <div className="row g-3 d-flex ">
                <div className="col-6 col-lg-3">
                    <HeroImage bg='#001A6C' style={{height : '100%'}}>
                        <div className="d-flex flex-column h-100">
                            <div className="hero-image__text hero-image__text--lg mb-2">
                                THIẾT BỊ GIÁM SÁT ĐIỆN
                            </div>
                            <div className="hero-image__text hero-image__text--md mb-2">
                                MITSUBISHI : POWER METER 
                            </div>
                            <div className="hero-image__text hero-image__text--sm flex-grow-1 mb-2 overflow-auto">
                            Các thiết bị giám sát năng lượng hỗ trợ đo lường, thu thập và phân tích mức tiêu thụ năng lượng, đạt ...
                            </div>
                            <span className="hero-image__btn align-self-start">
                                Xem tất cả &gt;&gt;
                            </span>
                        </div>
                    </HeroImage>
                </div>
                <div className="col-6 col-lg-3">
                    <TitleCard 
                        src={bg1} 
                        cardStyle={{backgroundColor : '#001A6C'}}
                        title = 'MÁY CHỦ THU THẬP DỮ LIỆU TIẾT KIỆM NĂNG LƯỢNG'
                    />
                </div>
                <div className="col-6 col-lg-3">
                    <TitleCard 
                        src={bg2} 
                        cardStyle={{backgroundColor : '#001A6C'}}
                        title = 'THIẾT BỊ ĐO NĂNG LƯỢNG - EcoMonitorPlus'
                    />
                </div>
                <div className="col-6 col-lg-3">
                    <TitleCard 
                        src={bg3} 
                        cardStyle={{backgroundColor : '#001A6C'}}
                        title = 'THIẾT BỊ ĐO NĂNG LƯỢNG - EcoMonitorLight'
                    />
                </div>
                <div className="col-6 col-lg-3">
                    <HeroImage bg='#002A9E' style={{height : '100%'}}>
                        <div className="d-flex flex-column h-100">
                            <div className="hero-image__text hero-image__text--lg mb-2">
                                THIẾT BỊ GIÁM SÁT KHÍ NÉN
                            </div>
                            <div className="hero-image__text hero-image__text--md mb-2">
                                CS INSTRUMENTS: AIR FLOW METER
                            </div>
                            <div className="hero-image__text hero-image__text--sm flex-grow-1 mb-2 overflow-auto">
                            Các thiết bị giám sát năng lượng hỗ trợ đo lường, thu thập và phân tích mức tiêu thụ năng lượng, đạt ...
                            </div>
                            <span className="align-self-start hero-image__btn">
                                Xem tất cả &gt;&gt;
                            </span>
                        </div>
                    </HeroImage>
                </div>
                <div className="col-6 col-lg-3">
                    <TitleCard 
                        src={bg4} 
                        cardStyle={{backgroundColor : '#002A9E'}}
                        title = 'ĐỒNG HỒ ĐO LƯU LƯỢNG KHÍ NÉN'
                    />
                </div>
                <div className="col-6 col-lg-3">
                    <TitleCard 
                        src={bg5} 
                        cardStyle={{backgroundColor : '#002A9E'}}
                        title = 'CẢM BIẾN SIÊU ÂM XOÁY ĐO LƯU LƯỢNG'
                    />
                </div>
                <div className="col-6 col-lg-3">
                    <TitleCard 
                        src={bg6} 
                        cardStyle={{backgroundColor : '#002A9E'}}
                        title = 'CẢM BIẾN LƯU LƯỢNG KHÍ NÉN ƯỚT'
                    />
                </div>
                <div className="col-6 col-lg-3">
                    <HeroImage bg='#2253B8' style={{height : '100%'}}>
                        <div className="d-flex flex-column h-100">
                            <div className="hero-image__text hero-image__text--lg mb-2">
                                THIẾT BỊ GIÁM SÁT TIÊU THỤ NƯỚC
                            </div>
                            <div className="hero-image__text hero-image__text--md mb-2">
                                EMS: WATER METER
                            </div>
                            <div className="hero-image__text hero-image__text--sm flex-grow-1 mb-2 overflow-auto">
                            Các thiết bị giám sát năng lượng hỗ trợ đo lường, thu thập và phân tích mức tiêu thụ năng lượng, đạt ...
                            </div>
                            <span className="hero-image__btn align-self-start">
                                Xem tất cả &gt;&gt;
                            </span>
                        </div>
                    </HeroImage>
                </div>
                <div className="col-6 col-lg-3">
                    <TitleCard 
                        src={bg7} 
                        cardStyle={{backgroundColor : '#2253B8'}}
                        title = 'ĐỒNG HỒ NƯỚC WOLTMANN KỸ THUẬT SỐ HYBRID'
                    />
                </div>
                <div className="col-6 col-lg-3">
                    <TitleCard 
                        src={bg8} 
                        cardStyle={{backgroundColor : '#2253B8'}}
                        title = 'ĐỒNG HỒ ĐO LƯU LƯỢNG ĐA PHƯƠNG TIỆN KỸ THUẬT SỐ'
                    />
                </div>
                <div className="col-6 col-lg-3">
                    <TitleCard 
                        src={bg9} 
                        cardStyle={{backgroundColor : '#2253B8'}}
                        title = 'MÁY ĐO LƯU LƯỢNG THÔNG MINH SIÊU ÂM CLAMP-ON'
                    />
                </div>
            </div>
            
        </div>
    </section> 
    )
}