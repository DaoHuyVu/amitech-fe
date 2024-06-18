import bg1 from '../../../assets/images/image 190.png'
import bg2 from '../../../assets/images/image 193.png'
import bg3 from '../../../assets/images/image 194.png'
import bg4 from '../../../assets/images/image 195.png'
import bg5 from '../../../assets/images/image 196.png'
import bg6 from '../../../assets/images/image 197.png'
export default function HomeSection7(){
    const customerData = [
        bg1,bg2,bg3,bg4,bg5,bg6
    ]
    return (
        <section id="section7">
            <div className="container d-flex flex-column">
                <div className="text-center pb-4">
                    <h5 style={{fontWeight : '700',color : '#4D4D4D'}}>ĐỐI TÁC VÀ KHÁCH HÀNG</h5>
                </div>
                <div className="row pb-4 g-3 d-flex">
                    {customerData.map((e,index)=>{
                        return (
                            <div 
                            key={index} 
                            style={{backgroundColor : 'white'}} 
                            className='col-6 col-md-4 col-xxl-2 py-3 d-flex justify-content-center align-items-center'>
                                <img src={e} alt='customerLogo' />
                            </div>
                        )
                    })}
                </div>
                <div className="row">

                </div>
            </div>
        </section>
    )
}