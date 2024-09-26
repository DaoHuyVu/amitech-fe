import { useEffect, useState } from 'react'
import { Link, useLocation} from 'react-router-dom'
import { getOtherSolutions } from '../../../../services/solution'
import { getNavigationImageCover } from '../../../../services/util'
import { concatePath, getLastPathname } from '../../../../utils/parseUrl'
import Card from '../../../card/Card'
import Image34Card from '../../../card/Image34Card'
import CardContent from '../../../card/CardContent'
import CardDescription from '../../../card/CardDescription'
import CardTitle from '../../../card/CardTitle'
export default function OtherSolutions(){
    const location = useLocation()
    const urlArr = location.pathname.split('/')
    const [otherSolutions,setOtherSolutions] = useState([])
    useEffect(()=>{
        const pathname = getLastPathname(location.pathname)
        const fetchOther = async () => {
            const res = await getOtherSolutions(pathname)
            setOtherSolutions(res.data.data)
        }
        fetchOther()
    },[location])
    return(
        <section id="solution-detail__other-solutions">
            <h4 className='fw-bold text-center pb-3' style={{color : '#4d4d4d'}}>GIẢI PHÁP KHÁC</h4>
            <div className="container">
                <div className='row g-4'>
                    {
                        otherSolutions.map((e,index) => {
                            return(
                                <Card key={index} className='col-12 col-md-6 col-xl-4 col-xxl-3 '>
                                    <Image34Card src={getNavigationImageCover(e)}/>
                                    <CardContent style={{backgroundColor : 'white'}}>
                                        <CardTitle maxLines={2} style={{color : '#4d4d4d',fontWeight : '700'}}>{e.name}</CardTitle>
                                        <CardDescription style={{color : '#4d4d4db2'}}>{e.description}</CardDescription>
                                        <Link to={concatePath(urlArr,urlArr.length-1,e.slug)} style={{color : '#00c2ff'}}>
                                            Xem thêm &gt;&gt;
                                        </Link>
                                    </CardContent>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}