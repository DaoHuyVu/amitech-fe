import Button from '../../button/Button'
import img from '../../../assets/images/image 179.png'
import { Link } from 'react-router-dom'
export default function OtherSolutions(){
    const data = [
        {
            title : 'QUẢN LÝ NĂNG LƯỢNG',
            description : 'Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...',
            src : img
        },
        {
            title : 'QUẢN LÝ NĂNG LƯỢNG',
            description : 'Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công...',
            src : img
        },
        {
            title : 'QUẢN LÝ NĂNG LƯỢNG',
            description : 'Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công...',
            src : img
        },
        {
            title : 'QUẢN LÝ NĂNG LƯỢNG',
            description : 'Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công...chuyên gia Quản lý Năng lượng, hỗ trợ công...',
            src : img
        },
    ]
    return(
        <section id="solution-detail__other-solutions">
            <h4 className='fw-bold text-center pb-3' style={{color : '#4d4d4d'}}>GIẢI PHÁP KHÁC</h4>
            <div className="container-fluid">
                <div className='row g-4'>
                    {
                        data.map((e,index) => {
                            return(
                                <div key={index} className='col-12 col-md-6 col-xl-4 col-xxl-3 '>
                                    <div className='h-100 d-flex flex-column'>
                                        <div>
                                            <img src={e.src} alt='Giải pháp thay thế' className='mw-100 w-100'/>
                                        </div>
                                        <div className='p-3 flex-fill d-flex flex-column' style={{backgroundColor : 'white'}}>
                                            <h5 style={{color : '#4d4d4d'}}>{e.title}</h5>
                                            <p style={{color : '#4d4d4db2'}} className='flex-grow-1 pb-4'>
                                                {e.description}
                                            </p>
                                            <span style={{color : '#00c2ff'}}>
                                                <Link to='#'>
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