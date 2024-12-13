import img from '../../../../assets/images/cau-hinh-he-thong 1.png'
export default function SystemModel(){
    return(
        <section id="solution-detail__system-model">
            <div className="container">
                <h4 className='fw-bold text-center pb-3' style={{color : '#4d4d4d'}}>MÔ HÌNH HỆ THỐNG</h4>
                <img src={img} alt='Mô hình hệ thống' className='mw-100 mx-auto'/>
            </div>
        </section>
    )
}