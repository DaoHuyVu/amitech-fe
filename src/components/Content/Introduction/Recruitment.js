import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from '../../../assets/images/image 44.png'
import { faUserGroup,faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import Button from '../../button/Button'
import { Link } from 'react-router-dom'
export default function Recruitment(){
    const data = [
        {
            image : img1,
            category : 'Công nghệ thông tin',
            name : 'Vận hành hệ thống - DEVOPS (VHHT)',
            quantity : 1,
            salary : 'Thỏa thuận',
            date : '30/11/2023',
            status : 'New'
        },
        {
            image : img1,
            category : 'Công nghệ thông tin',
            name : 'Vận hành hệ thống - DEVOPS (VHHT)',
            quantity : 1,
            salary : 'Thỏa thuận',
            date : '30/11/2023',
            status : null
        },{
            image : img1,
            category : 'Công nghệ thông tin',
            name : 'Vận hành hệ thống - DEVOPS (VHHT)',
            quantity : 1,
            salary : 'Thỏa thuận',
            date : '30/11/2023',
            status : null
        },{
            image : img1,
            category : 'Công nghệ thông tin',
            name : 'Vận hành hệ thống - DEVOPS (VHHT)',
            quantity : 1,
            salary : 'Thỏa thuận',
            date : '30/11/2023',
            status : null
        },{
            image : img1,
            category : 'Công nghệ thông tin',
            name : 'Vận hành hệ thống - DEVOPS (VHHT)',
            quantity : 1,
            salary : 'Thỏa thuận',
            date : '30/11/2023',
            status : null
        },{
            image : img1,
            category : 'Công nghệ thông tin',
            name : 'Vận hành hệ thống - DEVOPS (VHHT)',
            quantity : 1,
            salary : 'Thỏa thuận',
            date : '30/11/2023',
            status : 'Hot'
        }
    ]
    
    const cols = data.map((e,index)=>{
        let jobStatus = null
        if(e.status !== null){
            if(e.status === 'Hot'){
                jobStatus = <span className='position-absolute' style={{backgroundColor : 'red',color : 'white',top : '0.5rem',right : '0.5rem',padding : '0.1rem 0.5rem',borderRadius : '2px'}}>
                        Hot
                    </span>
            }
            else if(e.status === 'New'){
                jobStatus = <span className='position-absolute' style={{backgroundColor : '#00c2ff',color : 'white',top : '0.5rem',right : '0.5rem',padding : '0.1rem 0.5rem',borderRadius : '2px'}}>
                    New
                </span>
            }
        }
        return (
            <div className='col-12 col-xxl-6 px-2' key={index}>
                <div className='d-flex p-3 gap-3 position-relative' 
                style={{backgroundColor : 'white',color : '#4d4d4d'}}>
                    <div >
                        <img src={e.image} alt='img'/>
                    </div>
                    <div className='d-flex flex-column flex-grow-1'>
                        <p className='pb-2'>{e.category}</p>
                        <h5>{e.name}</h5>
                        <div className='row row-gap-2'>
                            <div className='col-12 col-md-5 col-lg-3 col-xxl-5'>
                                <FontAwesomeIcon icon={faUserGroup}/> Số lượng : {e.quantity}
                            </div>
                            <div className='col-12 col-md-7 col-lg-5 col-xxl-7 text-lg-center'>
                                $ Mức lương : {e.salary}
                            </div>
                            <div className='col-12 col-md-6 col-xxl-6 col-lg-4 text-xl-start'>
                                <FontAwesomeIcon icon={faCalendarDays}/> {e.date} 
                            </div>
                        </div>
                    </div>
                    {jobStatus} 
                </div>
            </div>
        )
    }) 
    return (
        <section id="introduction__section6">
            <h2 className="text-center pb-4 fw-bold" style={{color : '#4d4d4d'}}>TUYỂN DỤNG</h2>
            <div className="container-fluid pb-5">
                <div className="row row-gap-3">
                    {cols}
                </div>
            </div>
           <div className='text-center'>
                <Button >
                   <Link to='/tuyen-dung' >
                    <p style={{color : 'white'}}>
                        Xem tất cả &gt;&gt;
                    </p>
                   </Link>
                </Button>
           </div>
        </section>
    )
}