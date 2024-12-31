import Button from '../../button/Button'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchRecruitments } from '../../../services/recruitmentService'
import RecruitmentSection from '../Recruitment/RecruitmentSection'
import ResponsiveHeader from '../../text/ResponsiveHeader'
import { useTranslation } from 'react-i18next'
export default function Recruitment(){
    const {t} = useTranslation()
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
            <ResponsiveHeader className="text-center mb-4 text-uppercase" style={{color : '#4d4d4d'}}>{t('common.tuyen-dung')}</ResponsiveHeader>
            {data && <RecruitmentSection data={data} style={{backgroundColor : 'white'}}/>}
           <div className='text-center'>
           <Link to='/tuyen-dung' >
                <Button >
                    {t('button.xem-tat-ca')} &gt;&gt;
                </Button>
            </Link>
           </div>
        </section>
    )
}