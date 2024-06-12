import Background1 from '../../../assets/images/img1.png'
export default function HomeSection1(){
    return(
        <section id='section1' >
            <div className='container text-center '>
                <div className='row'>
                    <div className='col-12 col-md-6 py-4 py-md-0 d-md-flex align-items-center'>
                        <span className=''>
                            <h1 style={{color : '#ffffff'}}>
                                Chuyển đổi số
                            </h1>
                            <p style={{color : '#ffffff99'}}>
                                Amitech cung cấp các giải pháp hàng đầu 
                                giúp doanh nghiệp chuyển đổi số toàn diện,
                                nhanh chóng, tiết kiệm, hiệu quả
                            </p>
                        </span>
                    </div>
                    <div className='col-12 col-md-6 '>
                        <img 
                            src={Background1}
                            height='300px'
                            alt='CDS'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}