import { getJobThumbnail } from "../../../services/util"
import aspect34Wrapper from "../../card/aspectWrapper/aspect34Wrapper"
import CardCategory from "../../card/CardCategory"
import CardContent from "../../card/CardContent"
import CardTitle from "../../card/CardTitle"
import ImageCard from "../../card/ImageCard"
import Card from '../../card/Card'
import JobStatus from './JobStatus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup,faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
export default function RecruitmentSection({data,style}){
    const cols = data.map((e,idx)=>{
        const itemStyle = e.attributes.jobStatus !== null ? 
        e.attributes.jobStatus === 'Hot' ? {backgroundColor : 'red'}
        : {backgroundColor : '#00c2ff'}
        : null
        const jobStatus = <JobStatus style={itemStyle}>{e.attributes.jobStatus}</JobStatus>
        return(
            <Link to={`/tuyen-dung/${e.attributes.slug}`} className='col-12 col-xxl-6 p-2' key={idx}>
                <Card style={{...style,color : '#4d4d4db2'}} className="row flex-row mx-0" >
                    <div className="col-12 col-sm-4 p-3">
                        <ImageCard src={getJobThumbnail(e)} AspectWrapper={aspect34Wrapper}/>
                    </div>
                    <CardContent className="col-12 col-sm-8">
                        <CardCategory>{e.attributes.jobCategory}</CardCategory>
                        <CardTitle maxLines={1} style={{color : '#4d4d4d'}}>{e.attributes.jobName}</CardTitle>
                        <div className='row row-gap-2'>
                            <div className='col-auto'>
                                <FontAwesomeIcon icon={faUserGroup}/> Số lượng : {e.attributes.jobQuantity}
                            </div>
                            <div className='col-auto'>
                                $ Mức lương : {e.attributes.jobSalary}
                            </div>
                            <div className='col-auto'>
                                <FontAwesomeIcon icon={faCalendarDays}/> {e.attributes.jobDate} 
                            </div>
                        </div>
                    </CardContent>
                    {jobStatus}
                </Card>
                
            </Link>
        )
    })
    return (
        <div className="container pb-5 ps-0 pe-0">
            <div className="row">
                {cols}
            </div>
        </div>
    )
}