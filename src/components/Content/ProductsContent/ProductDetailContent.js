import { useLoaderData } from 'react-router-dom'
import { getPostDetail } from '../../../services/post'
import './product.css'
import ProductDetailSection1 from './ProductDetailSection1'
import ProductDetailSection2 from './ProductDetailSection2'
export const loader = async ({params}) => {
    return await getPostDetail(params.slug)
}
export default function ProductDetailContent(){
    const product = useLoaderData()
    return(
        <>
            <ProductDetailSection1 data={product}/>
            <ProductDetailSection2 data={product}/>
        </>
    )
}