import img1 from '../../../assets/images/image 223.png'
import Pagination from '../../common/Pagination'
export default function ActivitiesSection3(){
    const data = {
        current : 1,
        total : 12,
        perPage : 6,
        albums : [
            {
                images : [
                    img1
                ],
                quantity : 15,
                date : 'Thứ Ba, 15/08/2023',
                title : 'Chúc mừng ngày Quốc tế phụ nữ'
            },
            {
                images : [
                    img1
                ],
                quantity : 15,
                date : 'Thứ Ba, 15/08/2023',
                title : 'Chúc mừng ngày Quốc tế phụ nữ'
            },
            {
                images : [
                    img1
                ],
                quantity : 15,
                date : 'Thứ Ba, 15/08/2023',
                title : 'Chúc mừng ngày Quốc tế phụ nữ'
            },
            {
                images : [
                    img1
                ],
                quantity : 15,
                date : 'Thứ Ba, 15/08/2023',
                title : 'Chúc mừng ngày Quốc tế phụ nữ'
            },
            {
                images : [
                    img1
                ],
                quantity : 15,
                date : 'Thứ Ba, 15/08/2023',
                title : 'Chúc mừng ngày Quốc tế phụ nữ'
            },
            {
                images : [
                    img1
                ],
                quantity : 15,
                date : 'Thứ Ba, 15/08/2023',
                title : 'Chúc mừng ngày Quốc tế phụ nữ'
            },
            {
                images : [
                    img1
                ],
                quantity : 15,
                date : 'Thứ Ba, 15/08/2023',
                title : 'Chúc mừng ngày Quốc tế phụ nữ'
            },
            {
                images : [
                    img1
                ],
                quantity : 15,
                date : 'Thứ Ba, 15/08/2023',
                title : 'Chúc mừng ngày Quốc tế phụ nữ'
            },
            {
                images : [
                    img1
                ],
                quantity : 15,
                date : 'Thứ Ba, 15/08/2023',
                title : 'Chúc mừng ngày Quốc tế phụ nữ'
            },
            {
                images : [
                    img1
                ],
                quantity : 15,
                date : 'Thứ Ba, 15/08/2023',
                title : 'Chúc mừng ngày Quốc tế phụ nữ'
            },
            {
                images : [
                    img1
                ],
                quantity : 15,
                date : 'Thứ Ba, 15/08/2023',
                title : 'Chúc mừng ngày Quốc tế phụ nữ'
            },
            {
                images : [
                    img1
                ],
                quantity : 15,
                date : 'Thứ Ba, 15/08/2023',
                title : 'Chúc mừng ngày Quốc tế phụ nữ'
            },
        ]
    }
    const cols = data.albums.map((e,index) => {
        return (
            <div className='col-12 col-sm-6 col-lg-4 col-xl-3 p-2' key={index}>
                <div className='counter-bottom-image-wrapper mb-2'>
                    <img src={e.images.at(0)} alt='AlbumImage' className='counter-bottom-image'/>
                    <div className='counter-bottom-image__dimmed-bottom '>
                        1/{e.quantity} ảnh
                    </div>
                </div>
                <p style={{color : '#4d4d4db2'}} className='pb-2'>{e.date}</p>
                <h5 style={{color : '#4d4d4d'}}>{e.title}</h5>
            </div>
        )
    })
    return(
        <section id='activities__section3'>
            <div className='container'>
                <div className='row'>
                    {cols}
                </div>
                <Pagination 
                    currentPage={data.current}
                    totalPages={data.total/data.perPage}
                />
            </div>
        </section>
    )
}