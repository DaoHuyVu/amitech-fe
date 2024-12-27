import { useLoaderData } from "react-router-dom"
import { fetchRecruitment } from "../../../services/recruitmentService"
import './recruitment.css'
import parser from 'html-react-parser'
import { fetchRelatedRecruitment } from "../../../services/recruitmentService"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDollarSign, faLocationDot, faPhone, faSuitcase, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { useEffect, useState } from "react"
import RecruitmentSection from "./RecruitmentSection"
export const loader = async ({params}) => {
    return await fetchRecruitment(params.slug)
}
export default function RecruitmentDetail(){
    const jobDetail = useLoaderData().data.data[0]
    const [relatedRecruitments,SetRelatedRecruitment] = useState(null)
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const res = await fetchRelatedRecruitment()
                SetRelatedRecruitment(res.data.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])
    return (
        <main id='page-recruitment-detail'>
            <div className="container mb-5">
                <div className="row justify-content-between">
                    <div className="col-12 col-xxl-7" id="post-content">
                        {jobDetail && parser(jobDetail.attributes.jobContent)}
                    </div>
                    {
                        jobDetail && 
                        <div className="col-12 col-xxl-4">
                            <div className="row g-4">
                                <div className="col-12 col-lg-6 col-xxl-12" >
                                    <h3 style={{backgroundColor : '#006ce7',color : 'white'}} className="p-3 mb-0">
                                        Tổng quan công việc
                                    </h3>
                                    <div style={{backgroundColor : '#f4f9ff',color : '#006ce7'}} className="p-3">
                                        <div className="p-2">
                                            <FontAwesomeIcon icon={faDollarSign}/>
                                            <span className="ps-3" style={{color : '#4d4d4d'}}>Thu nhập: {jobDetail.attributes.jobSalary}</span>
                                        </div>
                                        <div className="p-2">
                                            <FontAwesomeIcon icon={faUserGroup} />
                                            <span className="ps-3" style={{color : '#4d4d4d'}}>Số lượng: {jobDetail.attributes.jobQuantity}</span>
                                        </div>
                                        <div className="p-2">
                                            <FontAwesomeIcon icon={faCalendar} />
                                            <span className="ps-3" style={{color : '#4d4d4d'}}>Hạn nộp hồ sơ: {jobDetail.attributes.jobDate}</span>
                                        </div>
                                        <div className="p-2">
                                            <FontAwesomeIcon icon={faSuitcase} />
                                            <span className="ps-3" style={{color : '#4d4d4d'}}>Chức vụ: Nhân viên</span>
                                        </div>
                                        <div className="p-2">
                                            <FontAwesomeIcon icon={faLocationDot} />
                                            <span className="ps-3" style={{color : '#4d4d4d'}}>Địa điểm làm việc: {jobDetail.attributes.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 col-xxl-12 d-flex flex-column">
                                <h3 style={{backgroundColor : '#006ce7',color : 'white'}} className="p-3">
                                        Thông tin liên hệ
                                    </h3>
                                    <div style={{backgroundColor : '#f4f9ff',color : '#006ce7'}} className="p-3 flex-grow-1">
                                        <div className="p-2 ">
                                            <FontAwesomeIcon icon={faUser} />
                                            <span className="ps-3" style={{color : '#4d4d4d'}}>Ms. Hà - Phòng Hành chính nhân sự</span>
                                        </div>
                                        <div className="p-2">
                                            <FontAwesomeIcon icon={faPhone} />
                                            <span className="ps-3" style={{color : '#4d4d4d'}}>Hotline tuyển dụng: 0383346880</span>
                                        </div>
                                        <div className="p-2">
                                            <FontAwesomeIcon icon={faLocationDot} />
                                            <span className="ps-3" style={{color : '#4d4d4d'}}>Email: haly@amitech.vn</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div style={{backgroundImage : `url('/image 216.png')`}} className="pt-5">
                <h2 style={{color : '#4d4d4d'}} className="text-center fw-bold">TUYỂN DỤNG</h2>
                {relatedRecruitments && <RecruitmentSection data={relatedRecruitments} style={{backgroundColor : 'white'}}/>}
            </div>
        </main>
    )
}