import { useEffect, useState } from "react";
import Banner from "../../common/BannerWrapper";
import { fetchRecruitments } from "../../../services/recruitmentService";
import './recruitment.css'
import SearchComponent from "../../search/SearchComponent";
import RecruitmentSection from "./RecruitmentSection";
import Pagination from "../Pagination/Pagination";
export default function Recruitment(){
    const [jobs,SetJobs] = useState(null)
    const [selectedPosition,setSelectedPosition] = useState('Tất cả')
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
    options.add("Tất cả")
    jobs && jobs.data.forEach(element => {
        options.add(element.attributes.jobCategory)
    });

    let filteredJobs = jobs ? query === '' ? jobs.data : jobs.data.filter(e => {
        return e.attributes.jobName.toLowerCase().includes(query)
    }) : []
    filteredJobs = jobs ? selectedPosition === 'Tất cả' ? filteredJobs : filteredJobs.filter(e => {
        return e.attributes.jobCategory === selectedPosition
    }) : []

    return(
        <main>
            <Banner 
                imgSrc='/business-concept-with-team-close-up.png'
                title='Cơ hội việc làm tại AMITECH'
                description='Trở thành một phần của AMITECH và nắm bắt cơ hội tạo dựng nghề nghiệp tương lai vững chắc'
            />
            <section id='page-recruitment' className="container">
                <div className="row mb-3">
                    <div className="col-12 col-xl-6">
                        <p style={{color : '#4d4d4d'}} className="mb-3 fw-bold">TÌM KIẾM CÔNG VIỆC</p>
                        <SearchComponent handleClick={handleQueryChange}/>
                    </div>
                    <div className="col-12 col-xl-6">
                        <p style={{color : '#4d4d4d'}} className="mb-3 fw-bold">VỊ TRÍ</p>
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