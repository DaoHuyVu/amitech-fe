import Button from '../../button/Button'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProducts } from '../../../services/product'
import { getNavigationById} from '../../../services/navigation'
import { getPostProfile } from '../../../services/util'
import TCard from '../../card/Card'
import ImageCard from '../../card/Image34Card'
import CardContent from '../../card/CardContent'
import CardTitle from '../../card/CardTitle'
import CardDescription from '../../card/CardDescription'
export default function Products(){
    const [products,setProducts] = useState([])
    const bgColor = ['#001a6c','#002a9e','#2253b8']
    useEffect(()=>{
        const fetchNavigation = async (id) => {
            try{
                const res = await getNavigationById(id)
                return res.data.data.attributes.name
            }catch(err){
                console.log(err)
            }
        }
        const fetchProducts = async () => {
            try{
                const nav = await fetchNavigation(5)
                const res = await getProducts(nav)
                setProducts(res.data.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchProducts()
    },[])
    return(
        <section id='home__products'>
        <div className="container">
            <div className='text-center mb-3'>
                <h4 style={{color : '#4D4D4D',fontWeight : '900'}} >
                        THIẾT BỊ VÀ SẢN PHẨM CÔNG NGHIỆP
                </h4>
                <p className="mw-100 mw-xl-75 mx-auto" style={{color : 'black'}}>
                Amitech cung cấp các giải pháp tiết kiệm Năng Lượng, giúp cho Doanh nghiệp giám sát tiêu thụ năng lượng, tiết kiệm thời gian và chi phí sử dụng, giảm phát thải, bảo vệ môi trường...
                </p>
            </div>
            {
                products.map((product,index) => {
                    return (
                        <div className='row g-3 pb-3' key={product.id}>
                            <div className='col-12 col-md-6 col-lg-4 col-xxl-3'>
                                <TCard className='p-2 rounded' style={{backgroundColor:`${bgColor[index]}`,minHeight : '250px'}}>
                                    <CardContent>
                                        <CardTitle maxLines={3} className='fs-2' style={{lineHeight : '40px'}}>{product.attributes.name}</CardTitle>
                                        <CardDescription>
                                            {product.attributes.description}
                                        </CardDescription>
                                    <Button style={{backgroundColor : 'transparent',borderColor : '#ffffff'}} >
                                        <Link to='/thiet-bi-va-san-pham-cong-nghiep' state={{category : `${product.attributes.name} `}} >
                                            <p style={{color : 'white'}}>Xem thêm &gt;&gt;</p>
                                        </Link>
                                    </Button>
                                    </CardContent>
                            </TCard>
                        </div>
                    {
                        product.attributes.posts.data.map((e) => {
                            return(
                                <div className='col-12 col-md-6 col-lg-4 col-xxl-3' key={e.id}>
                                    <TCard > 
                                        <ImageCard src={getPostProfile(e)} ></ImageCard>
                                        <CardContent className='rounded-bottom'style={{backgroundColor:`${bgColor[index]}`}}>
                                            <Link to={`/thiet-bi-va-san-pham-cong-nghiep/${e.attributes.slug}`} style={{color : 'white'}}>
                                                <CardTitle maxLines={2}>
                                                    {e.attributes.postTitle}
                                                </CardTitle>
                                            </Link>
                                        </CardContent>
                                    </TCard>
                                </div>
                            )
                        })
                    }
                </div>)
                })
            }
            </div>
    </section> 
    )
} 