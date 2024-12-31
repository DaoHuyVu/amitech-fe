import parser from 'html-react-parser'
import { useEffect, useState } from 'react'
import { getRelatedProducts } from '../../../services/product'
import { getPostNavigation, getPostProfile } from '../../../services/util'
import { Link, useLocation } from 'react-router-dom'
import { concatePath } from '../../../utils/parseUrl'
import { useTranslation } from 'react-i18next'
export default function ProductDetailSection2({data}){
    const location = useLocation()
    const urlArr = location.pathname.split("/")
    const [relatedProducts,setRelatedProducts] = useState([])
    const {t} = useTranslation()
    useEffect(() => {
        const fetchProducts = async () => {
           try{
            const navigation = getPostNavigation(data)
            const res = await getRelatedProducts(navigation,data.id)
            setRelatedProducts(res.data.data)
           }catch(err){
            console.log(err)
           }
        }
        fetchProducts()
    },[data])
    const cols = relatedProducts.map((e) => {
        return (
            <div className='col-12 col-md-6 col-xl-12 d-flex flex-column' key={e.id}>
                <div className='retained-4-7-image-wrapper'>
                    <img src={getPostProfile(e)} alt='Product' className='retained-4-7-image'/>
                </div>
                <div className='p-3 row-gap-2 flex-fill' style={{backgroundColor : '#666666'}}>
                    <Link to={concatePath(urlArr,urlArr.length-1,`/${e.attributes.slug}`)}>
                        <h5 
                        style={{color : 'white',textTransform : 'uppercase',textWrapStyle : "auto",lineHeight : '30px'}}>
                            {e.attributes.postTitle}
                        </h5>
                    </Link>
                </div>
            </div>
        )
    })
    return(
        <section id="product-detail__section2">
            <div className="container">
                <div className="row gx-lg-5">
                    <div className='col-12 col-xl-9' id='post-content'>
                        {parser(data.attributes.postContent)}
                    </div>
                    <div className='col-12 col-xl-3'>
                        <h4 className='text-center fw-bold text-xl-start'>{t("page.product-detail.section2.san-pham-lien-quan")}</h4>
                        <div className='row row-gap-3'>
                            {cols}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}