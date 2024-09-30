import { getPostProfile } from '../../../services/util'
import parser from 'html-react-parser'
import Card from '../../card/Card'
import { Link, useLocation } from 'react-router-dom'
import { hostName } from '../../../config/domain'
import ImageCard from '../../card/ImageCard'
import CardContent from '../../card/CardContent'
import CardTitle from '../../card/CardTitle'
import CardDescription from '../../card/CardDescription'
import Pagination from '../Pagination/Pagination'
import aspect47Wrapper from '../../card/aspectWrapper/aspect47Wrapper'
export default function ProjectSection2({data}){
    const location = useLocation()
    const projects = data.data
    const pagination = data.meta.pagination
    const cols = projects.map((e)=>{
        return(
            <div className='col-12 col-md-6 col-lg-4 col-xxl-3' key={e.id}>
                <Card>
                    <ImageCard src={getPostProfile(e)} AspectWrapper={aspect47Wrapper}/>  
                    <CardContent style={{backgroundColor : '#f1f7ff'}}>
                        <CardTitle style={{color : '#4d4d4d'}}>{e.attributes.postTitle}</CardTitle>
                        <CardDescription style={{color : '#4d4d4db2'}}>{parser(e.attributes.postDescription)}</CardDescription>
                    <Link to={`${hostName}${location.pathname}/${e.attributes.slug}`} style={{color : '#00c2ff',fontWeight : 'bold'}}>
                        Xem chi tiết &gt;&gt;
                    </Link>
                    </CardContent>
                </Card>
            </div>  
        )
    })
    return(
        <section id='project__section2'>
            <div className='container mb-5'>
                <div className='row g-4'>
                    {cols}
                </div>
            </div>
        <Pagination pageInfo={{page : pagination.page,pageCount : pagination.pageCount}}/>
        </section>
    )
}