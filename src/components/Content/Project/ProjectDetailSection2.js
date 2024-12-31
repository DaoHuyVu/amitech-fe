import Button from '../../button/Button'
import { Link, useLocation } from 'react-router-dom'
import parser from 'html-react-parser'
import { getRelatedProjects } from '../../../services/project'
import { useEffect, useState } from 'react'
import { getPostNavigation, getPostProfile } from '../../../services/util'
import { concatePath } from '../../../utils/parseUrl'
import { useTranslation } from 'react-i18next'
import ResponsiveHeader from '../../text/ResponsiveHeader'
export default function ProjectDetailSection2({project}){
    const [relatedProjects,setRelatedProjects] = useState([])
    const location = useLocation()
    const urlArr = location.pathname.split("/")
    const {t} = useTranslation()
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
                            {t('button.xem-chi-tiet')} &gt;&gt;
                        </Link>
                    </Button>
                </div>
            </div>
        )
    })
    return(
        <section id="project-detail__section2">
            <div className="container">
                <div className="row gx-5">
                    <div className='col-12 col-xl-8 col-xxl-8 mb-5' id='post-content'>
                        {parser(project.attributes.postContent)}
                    </div>
                    <div className='col-12 col-xl-4 col-xxl-4'>
                        <ResponsiveHeader className='text-center text-xl-start text-uppercase'>{t('page.project-detail.section2.du-an-lien-quan')}</ResponsiveHeader>
                        <div className='row row-gap-3'>
                            {cols}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}