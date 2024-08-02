import Button from '../../button/Button'
import { Link, useLocation } from 'react-router-dom'
import parser from 'html-react-parser'
import { getRelatedProjects } from '../../../services/project'
import { useEffect, useState } from 'react'
import { getPostNavigation, getPostProfile } from '../../../services/util'
import { concatePath } from '../../../utils/parseUrl'
export default function ProjectDetailSection2({project}){
    const [relatedProjects,setRelatedProjects] = useState([])
    const location = useLocation()
    const urlArr = location.pathname.split("/")
    useEffect(()=>{
        const fetchProjects = async () => {
            try{
                const navigation = getPostNavigation(project)
                const res = await getRelatedProjects(navigation,project.id)
                setRelatedProjects(res.data.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchProjects()
    },[project])
    const cols = relatedProjects.map((e) => {
        return (
            <div className='col-12 col-md-6 col-xl-12 d-flex flex-column' key={e.id}>
                <img src={getPostProfile(e)} alt='Related Project' width='100%'/>
                <div className='p-3 d-flex flex-column row-gap-2 flex-grow-1 align-items-start' style={{backgroundColor : '#f1f7ff'}}>
                    <h4 style={{color : '#4d4d4d'}} className='text__weight--lg'>{e.attributes.postTitle}</h4>
                    <div className='flex-grow-1'>
                        <div style={{color : '#4d4d4db2'}}>
                            {parser(e.attributes.postDescription)}
                        </div>
                    </div>
                    <Button style={{backgroundColor : 'transparent',color : '#00c2ff',border : 'none'}}>
                        <Link to={concatePath(urlArr,urlArr.length-1,`/${e.attributes.slug}`)}>
                            Xem chi tiết &gt;&gt;
                        </Link>
                    </Button>
                </div>
            </div>
        )
    })
    return(
        <section id="project-detail__section2">
            <div className="container-fluid">
                <div className="row gx-5">
                    <div className='col-12 col-xl-8 col-xxl-9 pb-4' id='post-content'>
                        {parser(project.attributes.postContent)}
                    </div>
                    <div className='col-12 col-xl-4 col-xxl-3'>
                        <h4 className='text-center fw-bold text-xl-start'>DỰ ÁN LIÊN QUAN</h4>
                        <div className='row row-gap-3'>
                            {cols}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}