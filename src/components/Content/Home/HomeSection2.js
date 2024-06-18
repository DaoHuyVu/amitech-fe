import Background1 from '../../../assets/images/img4.png'
import Button from '../../button/Button'
import LeftScrollContainer from '../../scroller/LeftScrollContainer'
export default function HomeSection2(){
    return(
        <section id="section2">
            <div className="container">
                <div className="text-center d-flex flex-column align-items-center mb-4">
                    <h4 className='text__weight--lg' style={{color : '#4D4D4D'}}>
                        Giới thiệu về Amitech
                    </h4>
                    <p className="mw-100" style={{color : 'black'}}>
                        <span className='text__weight--lg' style={{color : '#4D4D4D'}}>
                            AMITECH    
                        </span > - Công ty cổ phần giải pháp Công nghệ Ami Việt Nam 
                        với Đam mê và Khao khát trở thành một Công ty Công nghệ hàng 
                        đầu khu vực trong lĩnh vực Ứng dụng Công nghệ trong Quản lý và 
                        Sản Xuất Công Nghiệp.
                    </p>
                </div>
                <div className="row ">
                    <div className="col-12 col-md-6 text-center mb-4">
                        <img src={Background1} height='300px' alt="IntroductionImage"/>
                    </div>
                    <div className="col-12 col-md-6">
                        <LeftScrollContainer>
                            <h6 style={{color : '#002A9E',fontWeight : '600'}}>Điểm ưu việt</h6>
                            <ul className='pb-3' style={{color : '#152D52'}} >
                                <li>Ứng dụng công nghệ tiên tiến, hiện đại nhất hiện nay</li>
                                <li>Dễ dàng tích hợp, trao đổi dữ liệu với các hệ thống khác</li>
                                <li>Vận hành hổn định trên mọi thiết bị đầu cuối</li>
                            </ul>
                            <h6 className='pb-3' style={{color : '#152D5280'}}>
                                Sản phẩm chất lượng
                            </h6>
                            <h6 className='pb-3' style={{color : '#152D5280'}}> 
                                Tư vấn,hỗ trợ
                            </h6>
                            <h5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </h5>
                        </LeftScrollContainer>                      
                        <Button 
                            style={{marginRight : '1rem'}}>
                                Tìm hiểu thêm
                        </Button>
                        <Button 
                            style={{backgroundImage : 'linear-gradient(90deg, #FF512F 0%, #F09819 100%)'}}>
                                Xem hồ sơ Năng lực
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}