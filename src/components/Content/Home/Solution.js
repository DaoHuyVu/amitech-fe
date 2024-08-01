import { useEffect, useState } from 'react'
import Button from '../../button/Button'
import HoverableHeroImage from '../../heroImage/HoverableHeroImage'
import { Link } from 'react-router-dom'
import { getSubNavigations } from '../../../services/navigation'
import { getImageCover } from '../../../services/util'
export default function Solution(){
    const [data,setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
           try{
            const res = await getSubNavigations('/giai-phap-chuyen-doi-so')
            setData(res.data.data)
           }catch(err){
            console.log(err)
           }
        }
        fetchData()
    },[])
    const heroImages = data.map((e)=>{
        return (
           <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 ' key = {e.id}>
                <HoverableHeroImage className='hoverable-hero-image--bg-dim' 
                src={getImageCover(e)} title = {e.name} slug={e.url}>
                    <p>{e.description}</p>
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