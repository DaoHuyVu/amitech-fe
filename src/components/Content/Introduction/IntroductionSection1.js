import bg1 from '../../../assets/images/eb8e4180959645c81c87445 1.png'
import bg2 from '../../../assets/images/IMG_7629 1.png'
import bg3 from '../../../assets/images/e55b1bec035ad004894b 2.png'
import bg4 from '../../../assets/images/image 174.png'
export default function IntroductionSection1(){
    const data = [bg1,bg2,bg3,bg4]
    const columns = data.map((e,index)=>{
        return (
            <div className='col-3' key={index} >
                <img src={e} alt='img' width='100%'/>
            </div>
        )
    })

    return(
        <section id="introduction__section1">
            <div className="container-fluid">
                <div className='text-center position-relative'>
                    <h2 className='pb-3'>Công ty Cổ phần Giải pháp Công nghệ AMI Việt Nam (AMITECH)</h2>
                    <p>AMITECH cung cấp các dịch vụ về Quản lý năng lượng và Chuyển đổi số trong lĩnh vực quản lý năng lượng, giảm phát thải khí nhà kính. AMITECH có đội ngũ cán bộ, kỹ sư có trình độ cao, tay nghề vững, những người hàng ngày đang thực hiện dự án và cung cấp dịch vụ kỹ thuật cho khách hàng. AMITECH tự hào là Nhà cung cấp giải pháp của ….. và của các nhà cung cấp có uy tín ……</p>
                </div>
            </div>
            <div className='container  position-absolute top-100 translate-middle start-50'>
                <div className='row d-xl-flex d-none'>
                    {columns}
                </div>
            </div>
            <div className="introduction__section1__dim-background"></div>
            
        </section>
        
    )
}