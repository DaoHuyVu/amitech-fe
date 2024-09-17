import img from '../../../../assets/images/image 194.png'
export default function Customer(){
    const data = [img,img,img,img]
    return(
        <section id="solution-detail__customer">
            <h4 className='fw-bold text-center pb-3' style={{color : '#4d4d4d'}}>ĐỐI TÁC VÀ KHÁCH HÀNG</h4>
            <div className='container'>
                <div className='row g-3 justify-content-xl-center '>
                        {
                            data.map((e,index) => {
                                return(
                                    <div key={index} className='col-12 col-sm-6 col-lg-3 col-xl-auto '>
                                        <div className='p-3 border border-2 text-center'>
                                            <img src={e} alt='Customer' className='mw-100' height='50px'/>
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