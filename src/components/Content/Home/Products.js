import Button from '../../button/Button'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProducts } from '../../../services/product'
import { getPostProfile } from '../../../services/util'
import TCard from '../../card/TCard'
import ImageCard from '../../card/Image34Card'
import CardContent from '../../card/CardContent'
import CardTitle from '../../card/CardTitle'
import CardDescription from '../../card/CardDescription'
export default function Products(){
    const [products,setProducts] = useState([])
    const bgColor = ['#001a6c','#002a9e','#2253b8']
    useEffect(()=>{
        const fetchProducts = async () => {
            try{
                const res = await getProducts()
                setProducts(res.data.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchProducts()
    },[])
    return(
        <section id='home__products'>
        <div className="container-fluid">
            <div className='text-center mb-3'>
                <h4 className="text__weight--xl" style={{color : '#4D4D4D'}}>
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
                            <div className='col-12 col-sm-6 col-lg-4 col-xxl-3'>
                                <TCard className='p-2 rounded' style={{backgroundColor:`${bgColor[index]}`,minHeight : '250px'}}>
                                    <h3 className='px-2'>{product.attributes.title}</h3>
                                    <CardContent>
                                        <CardDescription>
                                            {product.attributes.description}
                                        </CardDescription>
                                    <Button style={{backgroundColor : 'transparent',border : 'none'}} className='p-0'>
                                        <Link to='/thiet-bi-va-san-pham-cong-nghiep' state={{category : `${product.attributes.title} `}} >
                                            <p style={{color : 'white'}}>Xem thêm &gt;&gt;</p>
                                        </Link>
                                    </Button>
                                    </CardContent>
                            </TCard>
                        </div>
                    {
                        product.attributes.posts.data.map((e) => {
                            return(
                                <div className='col-12 col-sm-6 col-lg-4 col-xxl-3' key={e.id}>
                                    <TCard > 
                                        <ImageCard src={getPostProfile(e)}></ImageCard>
                                        <CardContent className='rounded-bottom'style={{backgroundColor:`${bgColor[index]}`}}>
                                            <CardTitle maxLines={2}>
                                                {e.attributes.postTitle}
                                            </CardTitle>
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