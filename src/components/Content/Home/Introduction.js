import Background1 from '../../../assets/images/img4.png'
import Button from '../../button/Button'
import LeftScrollContainer from '../../scroller/LeftScroll'
export default function Introduction(){
    return(
        <section id="home__introduction">
            <div className="container-fluid">
                <div className="text-center d-flex flex-column align-items-center mb-4">
                    <h4 className='text__weight--xl' style={{color : '#4D4D4D'}}>
                       GIỚI THIỆU VỀ AMITECH
                    </h4>
                    <h6 className="mw-xl-75 mw-100 fw-normal" style={{color : 'black',lineHeight : '24px'}} >
                        <span className='text__weight--lg' style={{color : '#4D4D4D'}}>
                            AMITECH    
                        </span> - Công ty cổ phần giải pháp Công nghệ Ami Việt Nam 
                        với Đam mê và Khao khát trở thành một Công ty Công nghệ hàng 
                        đầu khu vực trong lĩnh vực Ứng dụng Công nghệ trong Quản lý và 
                        Sản Xuất Công Nghiệp.
                    </h6>
                </div>
                <div className="row g-5">
                    <div className="col-12 col-lg-6 mb-4 text-center text-lg-start">
                        <img loading='lazy' src={Background1} className='mw-100 ' alt="IntroductionImage"/>
                    </div>
                    <div className="col-12 col-lg-6" style={{minHeight : '400px'}}>
                        <LeftScrollContainer style={{height : '300px'}}>
                            <h4 style={{color : '#002A9E',fontWeight : '600'}}>Điểm ưu việt</h4>
                            <ul className='pb-3' style={{color : '#152D52'}} >
                                <li>
                                    <h6>Ứng dụng công nghệ tiên tiến, hiện đại nhất hiện nay</h6>
                                </li>
                                <li>
                                    <h6>Dễ dàng tích hợp, trao đổi dữ liệu với các hệ thống khác</h6>
                                </li>
                                <li>
                                   <h6> Vận hành hổn định trên mọi thiết bị đầu cuối</h6>
                                </li>
                            </ul>
                            <h4 className='pb-3' style={{color : '#152D5280'}}>
                                Sản phẩm chất lượng
                            </h4>
                            <h4 className='pb-3' style={{color : '#152D5280'}}> 
                                Tư vấn,hỗ trợ
                            </h4>
                            <h5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </h5>
                        </LeftScrollContainer>  
                        <div className='pb-5'></div>               
                        <div className='row g-4'>
                            <div className='col-12 col-sm-auto'>
                                <Button>
                                        Tìm hiểu thêm
                                </Button>
                            </div>
                            <div className='col-12 col-sm-auto'>
                                <Button 
                                    style={{backgroundImage : 'linear-gradient(90deg, #FF512F 0%, #F09819 100%)'}}>
                                        Xem hồ sơ Năng lực
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}