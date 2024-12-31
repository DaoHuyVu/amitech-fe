import { useEffect, useState } from "react";
import Banner from "../../common/BannerWrapper";
import { fetchRecruitments } from "../../../services/recruitmentService";
import './recruitment.css'
import SearchComponent from "../../search/SearchComponent";
import RecruitmentSection from "./RecruitmentSection";
import Pagination from "../Pagination/Pagination";
import { useTranslation } from "react-i18next";
export default function Recruitment(){
    const [jobs,SetJobs] = useState(null)
    const {t} = useTranslation()
    const [selectedPosition,setSelectedPosition] = useState(t('common.tat-ca'))
    const [query,setQuery] = useState('')

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const res = await fetchRecruitments()
                SetJobs(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])

    const handleQueryChange = (q) => {
        setQuery(q)
    }
    const handlePositionChange = (p) => {
        setSelectedPosition(p)
    }
    const options = new Set()
    options.add(t('common.tat-ca'))
    jobs && jobs.data.forEach(element => {
        options.add(element.attributes.jobCategory)
    });

    let filteredJobs = jobs ? query === '' ? jobs.data : jobs.data.filter(e => {
        return e.attributes.jobName.toLowerCase().includes(query)
    }) : []
    filteredJobs = jobs ? selectedPosition === t('common.tat-ca') ? filteredJobs : filteredJobs.filter(e => {
        return e.attributes.jobCategory === selectedPosition
    }) : []

    return(
        <main>
            <Banner 
                imgSrc='/business-concept-with-team-close-up.png'
                title={t('page.recruitment.title')}
                description={t('page.recruitment.description')}
            />
            <section id='page-recruitment' className="container">
                <div className="row mb-3">
                    <div className="col-12 col-xl-6">
                        <p style={{color : '#4d4d4d'}} className="mb-3 fw-bold">{t('common.tim-kiem-cong-viec')}</p>
                        <SearchComponent handleClick={handleQueryChange}/>
                    </div>
                    <div className="col-12 col-xl-6">
                        <p style={{color : '#4d4d4d'}} className="mb-3 fw-bold">{t('common.vi-tri')}</p>
                        <select className="py-3 w-100" style={{border : '1px solid #d9d9d9',borderRadius : '5px'}}
                        onChange={(e) => handlePositionChange(e.target.value)}>
                            {
                               Array.from(options).map((e,idx)=>(<option value={e} key={idx}>{e}</option>))
                            }
                        </select>
                    </div>
                </div>
                {jobs && <RecruitmentSection data={filteredJobs} style={{backgroundColor : '#f4f9ff'}}/>}
            </section>
            {
                jobs &&  
                <Pagination pageInfo={{
                    page : 1,
                    pageCount : jobs.meta.pagination.pageCount
                }}/>
            }
        </main>
    )
}