import Button from '../../button/Button'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchRecruitments } from '../../../services/recruitmentService'
import RecruitmentSection from '../Recruitment/RecruitmentSection'
export default function Recruitment(){
    const [data,setData] = useState(null)
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await fetchRecruitments()
                setData(res.data.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])     
    return (
        <section id="tuyen-dung">
            <h2 className="text-center pb-4 fw-bold" style={{color : '#4d4d4d'}}>TUYỂN DỤNG</h2>
            {data && <RecruitmentSection data={data} style={{backgroundColor : 'white'}}/>}
           <div className='text-center'>
           <Link to='/tuyen-dung' >
                <Button >
                    Xem tất cả &gt;&gt;
                </Button>
            </Link>
           </div>
        </section>
    )
}