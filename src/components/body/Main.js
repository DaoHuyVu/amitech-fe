import '../../assets/styles/utility.css'
import Background1 from '../../assets/images/home_slice_1f230099b4.png'
import Background2 from '../../assets/images/img2.png'
export default function Main(){
    const style1 = {
        backgroundImage : `url(${Background1})`,
        backgroundSize : 'cover',
        backgroundPosition : '50%',
        minHeight : '60vh'
    }
    const style2 = {
        backgroundImage : `url(${Background2})`
    }
    return(
        <>
            <div className='bg-linear-blue pd-vertical-1em flex align-item-center 
            pd-left-10per' style = {style1}>
                <span className='w-25per'>
                    <h1 className='color-white mx-0 leading-loose'>Chuyển đổi số</h1>
                    <p className='mx-0 color-white__opacity-60 font-sm leading-loose' >Amitech cung cấp các giải pháp hàng đầu giúp doanh nghiệp 
                        chuyển đổi số toàn diện, nhanh chóng, tiết kiệm, hiệu quả
                    </p>
                </span>
            </div>
            <div className='flex-dir-column align-item-center pd-left-10pro pd-right-10per pd-right' style={style2}>
                <h2>Giới thiệu về Amitech</h2>
            </div>  
            
        </>
    )
}