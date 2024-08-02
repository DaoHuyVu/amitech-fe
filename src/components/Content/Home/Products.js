import Button from '../../button/Button'
import Scroller from '../../scroller/Scroller'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProducts } from '../../../services/product'
import { getPostProfile } from '../../../services/util'
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
                                <div className='p-3 d-flex flex-column align-items-start rounded' style={{backgroundColor : `${bgColor[index]}`,height : '350px'}}>
                                    <h3 className='text-uppercase pb-2'>{product.attributes.title}</h3>
                                    <div className='flex-grow-1 w-100' style={{marginBottom : '12px'}} >
                                        <Scroller >
                                            <p>{product.attributes.description}</p>
                                        </Scroller>
                                </div>
                                <Button style={{backgroundColor : 'transparent'}}>
                                    <Link to='/thiet-bi-va-san-pham-cong-nghiep' state={{category : `${product.attributes.title}`}} >
                                        <p style={{color : 'white'}}>Xem thêm &gt;&gt;</p>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    {
                        product.attributes.posts.data.map((e) => {
                            return(
                                <div className='col-12 col-sm-6 col-lg-4 col-xxl-3' key={e.id}>
                                    <div>
                                        <div style={{height : 'calc(350px - 1rem - 48px)'}} >
                                            <img loading="lazy"  className=' w-100 h-100' src={getPostProfile(e)}  alt='Product ' />
                                        </div>
                                        <div style={{height:'calc(1rem + 48px)',backgroundColor:`${bgColor[index]}`}}>
                                            <div className='p-2'>
                                                {e.attributes.postTitle}
                                            </div>
                                        </div>
                                    </div>
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