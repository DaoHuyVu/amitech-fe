import bg1 from '../../../assets/images/image 190.png'
import bg2 from '../../../assets/images/image 193.png'
import bg3 from '../../../assets/images/image 194.png'
import bg4 from '../../../assets/images/image 195.png'
import bg5 from '../../../assets/images/image 196.png'
import bg6 from '../../../assets/images/image 197.png'
import bg7 from '../../../assets/images/gircontactl3.png'
import Input from '../../input/Input'
import Button from '../../button/Button'
export default function HomeSection7(){
    const customerData = [
        bg1,bg2,bg3,bg4,bg5,bg6
    ]
    return (
        <section id="section7">
            <div className="container">
                <div className="text-center pb-4 ">
                    <h5 style={{fontWeight : '700',color : '#4D4D4D'}}>ĐỐI TÁC VÀ KHÁCH HÀNG</h5>
                </div>
                <div className="row g-3 pb-3">
                    {customerData.map((e,index)=>{
                        return (
                            <div 
                            key={index} 
                            className='col-6 col-md-4 col-xl-2 ' >
                                <div className='d-flex justify-content-center align-items-center h-100' style={{backgroundColor : 'white'}} >
                                    <img src={e} alt='customerLogo' className='mw-100'/>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="row" style={{background :'linear-gradient(360deg, #006CE7 0%, #0E349C 100%)'}}>
                    <div className='col-12 col-lg-6 text-center order-2'>
                        <img src={bg7} alt ='PriceImg' className='mw-100'/> 
                    </div>
                    <div className='col-12 col-lg-6 d-flex flex-column py-4 justify-content-center
                     align-items-center align-items-lg-start order-1 order-lg-2 row-gap-4'>
                        <h4>ĐĂNG KÝ NHẬN TƯ VẤN MIỄN PHÍ</h4>
                        <Input  placeholder='Họ tên *' className='w-75' type='text' required/>
                        <Input  placeholder='Số điện thoại *' typw='number'className='w-75' required/>
                        <Input  placeholder='Email *' type='email' className='w-75' required/>
                        <Input  placeholder='Công ty *' type='text' className='w-75' required/>
                        <Button
                            style={{backgroundColor : '#00C2FF'}}>
                                Nhận tư vấn miễn phí
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}