import { useState,useEffect } from 'react'
import Pagination from '../Pagination/Pagination'
import { getGalleries } from '../../../services/galleryService'
import { host } from '../../../services/AxiosInstance'
import { Link } from 'react-router-dom'
export default function ActivitiesSection3(){
    const [galleries,setGalleries] = useState(null)
    const fetchGalleries = async (page = 1,pageSize = 4) => {
        try{
            const res = await getGalleries(page,pageSize)
            setGalleries(res.data)
        }catch(ex){
            console.error(ex)
        }
    }
    useEffect(() => {
        fetchGalleries()
    },[])
    const cols = galleries ? galleries.data.map((e,index) => {
        return (
            <div className='col-12 col-sm-6 col-lg-4 col-xl-3 p-2' key={index}>
                <div className='retained-4-7-image-wrapper'>
                    <img className='aspect-retained-image' src={`${host}${e.attributes.galleryProfile.data.attributes.url}`} />
                </div>
                <p style={{weight : '400',fontSize : '12px',color : '#4d4d4db2'}} className='mb-3'>
                    {
                        galleries && e.attributes.galleryDate
                    }
                </p>
                <Link to={`/gioi-thieu/hinh-anh-hoat-dong/${e.id}`}>
                    <h3 
                        style={{textWrap : 'wrap',color : '#4d4d4d',fontWeight : '700'}} 
                        className='mb-3'
                    >
                        { galleries && e.attributes.galleryTitle}
                    </h3>
                </Link>
            </div>
        )
    }) : []
    return(
        <section id='activities__section3'>
            <div className='container'>
                <div className='row mb-4'>
                    {cols}
                </div>
                {
                    galleries && 
                    <Pagination 
                        pageInfo={{page : galleries.meta.pagination.page,
                        pageCount : galleries.meta.pagination.pageCount}}
                        fetchPageItems={(page) => fetchGalleries(page = page)}
                    />
                }
            </div>
        </section>
    )
}