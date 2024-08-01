import { useEffect, useState } from 'react'
import { Link, useLocation} from 'react-router-dom'
import { getOtherSolutions } from '../../../../services/solution'
import { getImageCover } from '../../../../services/util'
import { concatePath } from '../../../../utils/parseUrl'
export default function OtherSolutions({navigation}){
    const location = useLocation()
    const urlArr = location.pathname.split('/')
    const [otherSolutions,setOtherSolutions] = useState([])
    useEffect(()=>{
        const fetchOther = async () => {
            const res = await getOtherSolutions(navigation.slug)
            setOtherSolutions(res.data.data)
        }
        fetchOther()
    },[navigation])
    return(
        <section id="solution-detail__other-solutions">
            <h4 className='fw-bold text-center pb-3' style={{color : '#4d4d4d'}}>GIẢI PHÁP KHÁC</h4>
            <div className="container-fluid">
                <div className='row g-4'>
                    {
                        otherSolutions.map((e,index) => {
                            return(
                                <div key={index} className='col-12 col-md-6 col-xl-4 col-xxl-3 '>
                                    <div className='h-100 d-flex flex-column'>
                                        <div>
                                            <img src={getImageCover(e)} alt='Solution' className='mw-100 w-100'/>
                                        </div>
                                        <div className='p-3 flex-fill d-flex flex-column' style={{backgroundColor : 'white'}}>
                                            <h5 style={{color : '#4d4d4d'}}>{e.name}</h5>
                                            <p style={{color : '#4d4d4db2'}} className='flex-grow-1 pb-4'>
                                                {e.description}
                                            </p>
                                            <span style={{color : '#00c2ff'}}>
                                                <Link to={concatePath(urlArr,urlArr.length-1,e.slug)}>
                                                    Xem thêm &gt;&gt;
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}