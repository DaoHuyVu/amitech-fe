import img1 from '../../../assets/images/image 103-product.png'
export default function ProductDetailSection2(){
    const relatedProject = [
        {
            image : img1,
            title : 'Máy chủ thu thập dữ liệu tiết kiệm Năng lượng',
        },
        {
            image : img1,
            title : 'Máy chủ thu thập dữ liệu tiết kiệm Năng lượng',
        },
        {
            image : img1,
            title : 'Máy chủ thu thập dữ liệu tiết kiệm Năng lượng',
        },
    ]
    const cols = relatedProject.map((e,index) => {
        return (
            <div className='col-12 col-md-6 col-xl-12 d-flex flex-column' key={index}>
                
                <div className='retained-4-7-image-wrapper'>
                    <img src={e.image} alt='Product Img' className='retained-4-7-image'/>
                </div>
                <div className='p-3 row-gap-2 flex-fill' style={{backgroundColor : '#666666'}}>
                    <h5 style={{color : 'white',margin : '0px'}} >{e.title}</h5>
                    <div >
                        
                    </div>
                </div>
            </div>
        )
    })
    return(
        <section id="product-detail__section2">
            <div className="container">
                <div className="row gx-lg-5">
                    <div className='col-12 col-xl-9'>
                    </div>
                    <div className='col-12 col-xl-3'>
                        <h4 className='text-center fw-bold text-xl-start'>SẢN PHẨM LIÊN QUAN</h4>
                        <div className='row row-gap-3'>
                            {cols}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}