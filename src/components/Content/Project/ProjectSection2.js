import { Link } from 'react-router-dom'
import img from '../../../assets/images/image 257.png'
import Button from '../../button/Button'
import Pagination from '../../common/Pagination'
export default function ProjectSection2({navigation}){
    const data = {
        current : 1,
        totalPages : 2,
        perPage : 12,
        list : [
            {
                image : img,
                title : 'Cung cấp Thiết bị mới thuộc đề tài "Nghiên cứu thiết kế, chế tạo hệ thống quản lý, vận hành cung cấp điện thông minh phù hợp...',
                customer : 'Viện Khoa học Công nghệ Mỏ - VINACOMIN',
                place : 'Công ty CP Chế tạo máy - Vinacomin, số 486, đường Trần Phú, phường Cẩm Thuỷ, TP Cẩm Phả, tỉnh Quảng Ninh, Việt Nam',
                date : '2023'
            },
            {
                image : img,
                title : 'Cung cấp Thiết bị mới thuộc đề tài ',
                customer : 'Viện Khoa học Công nghệ Mỏ - VINACOMIN',
                place : 'Công ty CP Chế tạo máy ',
                date : '2023'
            },
            {
                image : img,
                title : 'Cung cấp Thiết bị mới thuộc đề tài "Nghiên cứu thiết kế, chế tạo hệ thống quản lý, vận hành cung cấp điện thông minh phù hợp...',
                customer : 'Viện Khoa học Công nghệ Mỏ - VINACOMIN',
                place : 'Công ty CP Chế tạo máy - Vinacomin, số 486, đường Trần Phú, phường Cẩm Thuỷ, TP Cẩm Phả, tỉnh Quảng Ninh, Việt Nam',
                date : '2023'
            },
            {
                image : img,
                title : 'Cung cấp Thiết bị mới thuộc đề tài "Nghiên cứu thiết kế, chế tạo hệ thống quản lý, vận hành cung cấp điện thông minh phù hợp...',
                customer : 'Viện Khoa học Công nghệ Mỏ - VINACOMIN',
                place : 'Công ty CP Chế tạo máy - Vinacomin, số 486, đường Trần Phú, phường Cẩm Thuỷ, TP Cẩm Phả, tỉnh Quảng Ninh, Việt Nam',
                date : '2023'
            },
            {
                image : img,
                title : 'Cung cấp Thiết bị mới thuộc đề tài "Nghiên cứu thiết kế, chế tạo hệ thống quản lý, vận hành cung cấp điện thông minh phù hợp...',
                customer : 'Viện Khoa học Công nghệ Mỏ - VINACOMIN',
                place : 'Công ty CP Chế tạo máy - Vinacomin, số 486, đường Trần Phú, phường Cẩm Thuỷ, TP Cẩm Phả, tỉnh Quảng Ninh, Việt Nam',
                date : '2023'
            },
            {
                image : img,
                title : 'Cung cấp Thiết bị mới thuộc đề tài "Nghiên cứu thiết kế, chế tạo hệ thống quản lý, vận hành cung cấp điện thông minh phù hợp...',
                customer : 'Viện Khoa học Công nghệ Mỏ - VINACOMIN',
                place : 'Công ty CP Chế tạo máy - Vinacomin, số 486, đường Trần Phú, phường Cẩm Thuỷ, TP Cẩm Phả, tỉnh Quảng Ninh, Việt Nam',
                date : '2023'
            },
            {
                image : img,
                title : 'Cung cấp Thiết bị mới thuộc đề tài "Nghiên cứu thiết kế, chế tạo hệ thống quản lý, vận hành cung cấp điện thông minh phù hợp...',
                customer : 'Viện Khoa học Công nghệ Mỏ - VINACOMIN',
                place : 'Công ty CP Chế tạo máy - Vinacomin, số 486, đường Trần Phú, phường Cẩm Thuỷ, TP Cẩm Phả, tỉnh Quảng Ninh, Việt Nam',
                date : '2023'
            },
            {
                image : img,
                title : 'Cung cấp Thiết bị mới thuộc đề tài "Nghiên cứu thiết kế, chế tạo hệ thống quản lý, vận hành cung cấp điện thông minh phù hợp...',
                customer : 'Viện Khoa học Công nghệ Mỏ - VINACOMIN',
                place : 'Công ty CP Chế tạo máy - Vinacomin, số 486, đường Trần Phú, phường Cẩm Thuỷ, TP Cẩm Phả, tỉnh Quảng Ninh, Việt Nam',
                date : '2023'
            },
            {
                image : img,
                title : 'Cung cấp Thiết bị mới thuộc đề tài "Nghiên cứu thiết kế, chế tạo hệ thống quản lý, vận hành cung cấp điện thông minh phù hợp...',
                customer : 'Viện Khoa học Công nghệ Mỏ - VINACOMIN',
                place : 'Công ty CP Chế tạo máy - Vinacomin, số 486, đường Trần Phú, phường Cẩm Thuỷ, TP Cẩm Phả, tỉnh Quảng Ninh, Việt Nam',
                date : '2023'
            },
            {
                image : img,
                title : 'Cung cấp Thiết bị mới thuộc đề tài "Nghiên cứu thiết kế, chế tạo hệ thống quản lý, vận hành cung cấp điện thông minh phù hợp...',
                customer : 'Viện Khoa học Công nghệ Mỏ - VINACOMIN',
                place : 'Công ty CP Chế tạo máy - Vinacomin, số 486, đường Trần Phú, phường Cẩm Thuỷ, TP Cẩm Phả, tỉnh Quảng Ninh, Việt Nam',
                date : '2023'
            },
            {
                image : img,
                title : 'Cung cấp Thiết bị mới thuộc đề tài "Nghiên cứu thiết kế, chế tạo hệ thống quản lý, vận hành cung cấp điện thông minh phù hợp...',
                customer : 'Viện Khoa học Công nghệ Mỏ - VINACOMIN',
                place : 'Công ty CP Chế tạo máy - Vinacomin, số 486, đường Trần Phú, phường Cẩm Thuỷ, TP Cẩm Phả, tỉnh Quảng Ninh, Việt Nam',
                date : '2023'
            },
            {
                image : img,
                title : 'Cung cấp Thiết bị mới thuộc đề tài "Nghiên cứu thiết kế, chế tạo hệ thống quản lý, vận hành cung cấp điện thông minh phù hợp...',
                customer : 'Viện Khoa học Công nghệ Mỏ - VINACOMIN',
                place : 'Công ty CP Chế tạo máy - Vinacomin, số 486, đường Trần Phú, phường Cẩm Thuỷ, TP Cẩm Phả, tỉnh Quảng Ninh, Việt Nam',
                date : '2023'
            },
        ]
    }
    const cols = data.list.map((e,index)=>{
        return(
            <div className='col-12 col-md-6 col-lg-4 col-xxl-3 d-flex flex-column' key={index}>
                <div className='retained-4-7-image-wrapper'>
                    <img src={e.image} alt='Project Img' className='retained-4-7-image'/>
                </div>
                <div className='p-3 d-flex flex-column row-gap-2 flex-grow-1 align-items-start' style={{backgroundColor : '#f1f7ff'}}>
                    <h4 style={{color : '#4d4d4d'}} className='text__weight--lg'>{e.title}</h4>
                    <div className='flex-grow-1'>
                        <ul style={{color : '#4d4d4db2'}}>
                            <li>
                                <p><b>Tên khách hàng:</b> {e.customer}</p>
                            </li>
                            <li>
                                <p><b>Địa điểm thực hiện:</b> {e.place}</p>
                            </li>
                            <li>
                                <p><b>Thời gian thực hiện:</b> {e.date}</p>
                            </li>
                        </ul>
                    </div>
                    <Button style={{backgroundColor : 'transparent',color : '#00c2ff',border : 'none'}}>
                        Xem chi tiết &gt;&gt;
                    </Button>
                </div>
            </div>
        )
    })
    return(
        <section id='project__section2'>
            <div className='container'>
                <div className='row g-4'>
                    {cols}
                </div>
            </div>
            <Pagination 
                currentPage={data.current}
                totalPages={data.totalPages}
            />
        </section>
    )
}