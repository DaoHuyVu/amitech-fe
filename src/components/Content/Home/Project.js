import Button from '../../button/Button'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
import { useEffect, useState } from 'react'
import { getProjects } from '../../../services/project'
import { getPostProfile } from '../../../services/util'
import { hostName } from '../../../config/domain'
import TCard from '../../card/Card'
import TCardContent from '../../card/CardContent'
import TCardTitle from '../../card/CardTitle'
import CardDescription from '../../card/CardDescription'
import ImageCard from '../../card/ImageCard'
import aspect34Wrapper from '../../card/aspectWrapper/aspect34Wrapper'
import { useTranslation } from 'react-i18next'
export default function Project(){
    const {t} = useTranslation()
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
                <TCard>
                    <ImageCard src={getPostProfile(e)} AspectWrapper={aspect34Wrapper}/>
                    <TCardContent style={{backgroundColor : '#f4f9ff1a'}}>
                        <TCardTitle style={{fontSize : '20px',lineHeight : '30px',height : 'calc(30px*4)'}}>
                            {e.attributes.postTitle}
                        </TCardTitle>
                        <CardDescription style={{color : '#ffffffb2'}}>
                            {parse(e.attributes.postDescription)}
                        </CardDescription>
                        <Link to={`/du-an-tieu-bieu/${e.attributes.slug}`} style={{color : '#00c2ff'}}> 
                           {t('button.xem-them')} &gt;&gt;
                        </Link>
                    </TCardContent>
                </TCard>
            </div>
        )
    }) 
    return(
        <section id="home_project">
            <div className="container">
                <div className="text-center pb-4">
                    <h2 style={{fontWeight : '700',textTransform : 'uppercase'}}>{t("common.du-an-tieu-bieu")}</h2>
                </div>
                <div className="row g-3 pb-4">
                    {columns}
                </div>
                <div className='text-center'>
                    <Button
                        style={{backgroundColor : '#00c2ff',border : 'none'}}>
                            <Link to='/du-an-tieu-bieu'>
                                <p style={{color : 'white'}}>{t('button.xem-them')} &gt;&gt;</p>
                            </Link>
                    </Button>
                </div>
            </div>  
        </section>
    )
}