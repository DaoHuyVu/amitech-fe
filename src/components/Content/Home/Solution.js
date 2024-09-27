import { useEffect, useState } from 'react'
import Button from '../../button/Button'
import { Link } from 'react-router-dom'
import { getSubNavigations } from '../../../services/navigation'
import { getNavigationImageCover } from '../../../services/util'
import TCard from '../../card/Card'
import OverlayCard from '../../card/OverlayCard'
import CardContent from '../../card/CardContent'
import CardTitle from '../../card/CardTitle'
import CardDescription from '../../card/CardDescription'
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
    const solutions = data.map((e)=>{
        return (
           <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 ' key = {e.id}>
                <TCard style={{
                    backgroundImage : `linear-gradient(rgba(21, 45, 82, 0.7),rgba(21, 45, 82, 0.7)),url("${getNavigationImageCover(e)}")`,
                    backgroundSize : 'cover',
                    backgroundRepeat : 'no-repeat',
                    backgroundPosition : 'center',
                    minHeight : '322px',
                    borderRadius : '10px'
                }}> 
                    <CardContent >
                        <CardTitle>{e.name}</CardTitle>
                    </CardContent>
                    <OverlayCard style={{backgroundColor : 'rgba(0,42,158,1)'}}>
                        <CardTitle maxLines={2} style={{color : '#00c2ff'} }>{e.name}</CardTitle>
                        <CardDescription>{e.description}</CardDescription>
                        <Link style={{color : '#00C2FF'}} to={`${e.url}`} >
                            Xem thêm &gt;&gt;
                        </Link>
                    </OverlayCard>
                    
                </TCard>
           </div>
        )
    })
    return(
        <section id='home__solution'>
            <div className="container">
                <div className='text-center'>
                    <h4 style={{color : '#4D4D4D',lineHeight : '40px',fontWeight : 'bold' }}>
                            Giải pháp chuyển đổi số
                    </h4>
                    <p className="mw-100" style={{color : 'black'}}>
                        Amitech cung cấp các giải pháp chuyển đổi số hàng đầu, giúp doanh nghiệp chuyển đổi số toàn diện, nhanh chóng, tiết kiệm
                    </p>
                </div>
                <div className="row g-3 my-4">
                    {solutions}
                </div>
                <div className='text-center'>
                    <Button>
                        <Link to='/giai-phap-chuyen-doi-so'>
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