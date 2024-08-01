import img1 from '../../../../assets/images/image 265.png'
import Button from '../../../button/Button'
export default function Overview(){
    
    return (
        <section id="solution-detail__overview">
            <div className="container-fluid ">
               <div className="text-center ">
                    <h4 className='fw-bold ' style={{color : '#4d4d4d'}}>TỔNG QUAN VỀ PHẦN MỀM</h4>
                    <p style={{color : '#4d4d4d'}} className="w-75 mx-auto pb-3">
                        Là hệ thống
                        phần mềm thông minh, chuyên
                        nghiệp, hiện đại được tư vấn thiết
                        kế bởi các chuyên gia Quản lý
                        Năng lượng, hỗ trợ công tác quản
                        lý năng lượng trong các doanh
                        nghiệp công nghiệp.
                    </p>
                    <div className='pb-5'>
                        <img src={img1} alt='Solution Overview Video' className='mw-100'/>
                    </div>
                    <div>
                        <Button style={{marginRight : '1rem'}}>
                            Tư vấn miễn phí
                        </Button>
                        <Button style={{background: 'linear-gradient(90deg, #FF512F 0%, #F09819 100%)'}}>
                            Tải Catalogue
                        </Button>
                    </div>
               </div>
            </div>
        </section>
    )
}