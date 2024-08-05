import { getPostProfile } from '../../../services/util'
import Button from '../../button/Button'
import Pagination from '../../common/Pagination'
import parser from 'html-react-parser'
import { Link, useLocation } from 'react-router-dom'
import { hostName } from '../../../config/domain'
export default function ProjectSection2({data}){
    const location = useLocation()
    const projects = data.data
    const pagination = data.meta.pagination
    const cols = projects.map((e)=>{
        return(
            <div className='col-12 col-md-6 col-lg-4 col-xxl-3 d-flex flex-column' key={e.id}>
                <div className='retained-4-7-image-wrapper'>
                    <img src={getPostProfile(e)} alt='Project Img' className='retained-4-7-image'/>
                </div>
                <div className='p-3 d-flex flex-column row-gap-2 flex-grow-1 align-items-start' style={{backgroundColor : '#f1f7ff'}}>
                    <h4 style={{color : '#4d4d4d'}} className='text__weight--lg'>{e.attributes.postTitle}</h4>
                    <div className='flex-grow-1'>
                        <div style={{color : '#4d4d4db2'}}>
                            {parser(e.attributes.postDescription)}
                        </div>
                    </div>
                    <Button style={{backgroundColor : 'transparent',color : '#00c2ff',border : 'none'}}>
                        <Link to={`${hostName}${location.pathname}/${e.attributes.slug}`}>
                            Xem chi tiết &gt;&gt;
                        </Link>
                    </Button>
                </div>
            </div>
        )
    })
    return(
        <section id='project__section2'>
            <div className='container-fluid'>
                <div className='row g-4'>
                    {cols}
                </div>
            </div>
            <Pagination 
                currentPage={pagination.page}
                totalPages={pagination.pageCount}
            />
        </section>
    )
}