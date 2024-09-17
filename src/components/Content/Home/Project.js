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
import ImageCard from '../../card/Image34Card'
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
                <TCard>
                    <ImageCard src={getPostProfile(e) }/>
                    <TCardContent style={{backgroundColor : '#f4f9ff1a'}}>
                        <TCardTitle>
                            {e.attributes.postTitle}
                        </TCardTitle>
                        <CardDescription style={{color : '#ffffffb2'}}>
                            {parse(e.attributes.postDescription)}
                        </CardDescription>
                        <Link to={`${hostName}/du-an-tieu-bieu/${e.attributes.slug}`} style={{color : '#00c2ff'}}> 
                            Xem thêm &gt;&gt;
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