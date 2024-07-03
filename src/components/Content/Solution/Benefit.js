import img from '../../../assets/images/quan-ly-nang-luong 1.png'
export default function Benefit(){
    const data = [
        'Tính toán tiềm năng tiết kiệm Năng lượng',
        'Tự động phân tích và báo cáo',
        'Tiết kiệm chi phí sử dụng Năng lượng',
        'Phù hợp tiêu chuẩn ISO 50001',
        'Bảo mật dữ liệu',
        'Tích hợp đa nền tảng',
    ]
    return(
        <section id="solution-detail__benefit">
           <h4 className='fw-bold text-center pb-3' style={{color : '#4d4d4d'}}>Lợi ích</h4>
           <div className="container-fluid">
                <div className="row row-gap-3 ">
                    <div className="col-12 col-md-6 text-center text-md-end order-2 order-md-0">
                        <div >
                            <img src={img} alt='Quản lý năng lượng' className='mw-100'/>
                        </div>
                    </div>
                    <div className='col-12 col-md-6' >
                        {data.map((e,index) => {
                            return (
                                <p key={index} style={{color : '#4d4d4d'}} className='pb-3'>
                                    {index+1}. {e}
                                </p>
                            )
                        })}
                    </div>
                </div>
           </div>
        </section>
    )
}