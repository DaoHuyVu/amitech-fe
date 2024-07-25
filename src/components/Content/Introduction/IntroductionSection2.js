import bg1 from '../../../assets/images/IMG_8682 1.png'
import Button from '../../button/Button'
import OptionButton from '../../button/OptionButton'
export default function IntroductionSection2(){
    const navigations = [
        'Giới thiệu','Sứ mệnh - Tầm nhìn - Giá trị cốt lõi','Hình ảnh hoạt động',
        'Chứng nhận - Chứng chỉ','Tuyển dụng'
    ]
    const columns = navigations.map((e,index) => {
        return(
            <OptionButton link={`#introduction__section${index+2}`} key={index}>
                {e}
            </OptionButton>
        )
    })
    return(
        <section id="introduction__section2">
            <div className="container d-flex flex-column align-items-center">
                <div className="d-flex justify-content-center gap-3 pb-5">
                    {columns}
                </div>
                <div className="text-center">
                    <h2 style={{color : '#4d4d4d',fontWeight : '700'}} className="pb-3">Giới thiệu về Amitech</h2>
                </div>
                <div className='row d-flex row-gap-4 pb-4'>
                    <div className='col-12 col-xxl-6'>
                        <img src={bg1} alt='img' width='100%' height='100%'/>
                    </div>
                    <div className='col-12 col-xxl-6'>
                        <p style={{color : '#4D4D4D'}}>
                            Công ty cổ phần Giải pháp Công nghệ AMI Việt Nam được thành lập từ năm 2011.
                        </p>
                        <br/>
                        <p style={{color : '#4D4D4D'}}>
                        Với nhiều năm kinh nghiệm trong việc cung cấp các dịch vụ về Quản lý năng lượng và Chuyển đổi số trong lĩnh vực quản lý năng lượng, giảm phát thải khí nhà kính. Chúng tôi đã tham gia và đang là thành viên tích cực của các dự án Chương trình mục tiêu Quốc gia, Bộ Công thương, Bộ Tài nguyên và Môi trường và các tổ chức quốc tế: GIZ, WWF, WB, ADB, JICA,.. cũng như Tư vấn cho các tập đoàn công nghiệp, nhà máy sản xuất trong cả nước.
                        </p>
                        <br />
                        <p style={{color : '#4D4D4D'}}>
                        Với đội ngũ cán bộ, kỹ sư có trình độ chuyên môn kỹ thuật, tay nghề cao. Hàng năm chúng tôi thường xuyên tổ chức các đợt tập huấn để nâng cao giá trị nhân lực của Công ty. Song song với việc đào tạo và phát triển nhân lực, việc tiếp thu khoa học kỹ thuật và dây chuyền sản xuất, công nghệ lắp dựng mới là một vấn đề đặc biệt được chú trọng. Và chúng tôi luôn nỗ lực hết mình để tạo ra những sản phẩm hoàn hảo nhất, cung cấp dịch vụ với chất lượng cao nhất giúp các doanh nghiệp thực hiện tốt việc việc sử dụng năng lượng tiết kiệm và hiệu quả, giảm phát thải trong sản xuất, giảm chi phí sản xuất tăng tính cạnh tranh cho doanh nghiệp và tạo hình ảnh “Doanh nghiệp xanh”. Đóng góp một phần vào công cuộc công nghiệp hóa, hiện đại hóa của đất nước.
                        </p>
                    </div>
                </div>
                <Button style={{background : 'linear-gradient(90deg, #FF512F 0%, #F09819 100%)'}}>
                    <p>Tải hồ sơ năng lực</p>
                </Button>
            </div>
        </section>
    )
}