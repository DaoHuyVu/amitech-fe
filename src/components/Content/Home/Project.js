import Button from '../../button/Button'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
import { useEffect, useState } from 'react'
import { getProjects } from '../../../services/project'
import { getPostProfile } from '../../../services/util'
import { hostName } from '../../../config/domain'
export default function Project(){
    const [projects,setProjects] = useState([])
    useEffect(() => {
        const fetchProjects = async () => {
            try{
                const res = await getProjects()
                setProjects(res.data.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchProjects()
    },[])
    const columns = projects.map((e) => {
        return (
            <div className="col-12 col-md-6 col-xl-4 col-xxl-3" key={e.id}>
               <div className='d-flex flex-column h-100'>
                    <div className='aspect-2-3-image-wrapper'>
                        <img src={getPostProfile(e)} alt='Project Img' className='aspect-image'/>
                    </div>
                    <div className='p-3 d-flex flex-column flex-grow-1 align-items-start' style={{backgroundColor:'#f4f9ff1a'}}>
                        <h5 className='lh-base'>{e.attributes.postTitle}</h5>
                        <div style={{color : '#FFFFFFB2'}} className='flex-grow-1'>
                            {parse(e.attributes.postDescription)}
                        </div>
                        <Button style={{border : 'none',backgroundColor : 'transparent',color : '#00c2ff'}}>
                            <Link to={`${hostName}/du-an-tieu-bieu/${e.attributes.slug}`}>
                                Xem thêm &gt;&gt;
                            </Link>
                        </Button>
                    </div>
               </div>
            </div>
        )
    }) 
    return(
        <section id="home_project">
            <div className="container-fluid ">
                <div className="text-center pb-4">
                    <h3 style={{fontWeight : '700'}}>DỰ ÁN TIÊU BIỂU</h3>
                </div>
                <div className="row g-3 pb-4">
                    {columns}
                </div>
                <div className='text-center'>
                    <Button
                        style={{backgroundColor : '#00c2ff',border : 'none'}}>
                            <Link to='/du-an-tieu-bieu'>
                                <p style={{color : 'white'}}>Xem thêm &gt;&gt;</p>
                            </Link>
                    </Button>
                </div>
            </div>  
        </section>
    )
}