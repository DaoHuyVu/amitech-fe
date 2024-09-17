import Background1 from '../../../assets/images/img1.png'
export default function DigitalTransformation(){
    return(
        <section id='home__digital-transformation' >
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-xl-5 d-flex align-items-center text-center text-xl-start pb-3'>
                        <span>
                            <h1 className='fw-bolder pb-3 title-fs-md title-fs-sm'>
                                CHUYỂN ĐỔI SỐ
                            </h1>
                            <h4 style={{color : '#ffffff99'}} className='lh-base'>
                                Amitech cung cấp các giải pháp hàng đầu 
                                giúp doanh nghiệp chuyển đổi số toàn diện,
                                nhanh chóng, tiết kiệm, hiệu quả
                            </h4>
                        </span>
                    </div>
                    <div className='col-12 col-xl-1'></div>
                    <div className='col-12 col-xl-6 text-center text-xl-start'>
                        <img 
                            src={Background1}
                            alt='CDS'
                            className='mw-100'
                            loading='lazy'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}