import bg1 from '../../../assets/images/image 222.png'
import bg2 from '../../../assets/images/image 221.png'
import icon1 from '../../../assets/images/sumenh.png'
import icon2 from '../../../assets/images/tamnhin.png'
import icon3 from '../../../assets/images/giatricotloi.png'
import { useTranslation } from 'react-i18next'
export default function IntroductionSection3(){
    const {t} = useTranslation()
    const paragraphData = [
        {
            icon : icon1,
            title : t('page.introduction.section3.su-menh-title'),
            text : t('page.introduction.section3.su-menh')
        },
        {
            icon : icon2,
            title : t('page.introduction.section3.tam-nhin-title'),
            text : t('page.introduction.section3.tam-nhin')
        },
    ]
    const paragraph = paragraphData.map((e,index) => {
        const name = `icon${index+1}`
        return (
            <div className='d-flex column-gap-3 mb-3' key={index}>
                <div className='p-3 d-flex justify-content-center align-items-center flex-shrink-0' style={{width : '70px',height : '70px',backgroundColor : '#006CE7',borderRadius : '5px'}}>
                    <img loading='lazy' src={e.icon} alt={name}/>
                </div>
                <div>
                    <h6 style={{color : '#006CE7',fontWeight : '700'}}>{e.title}</h6>
                    <p style={{color : '#4D4D4D'}}>{e.text}</p>
                </div>
            </div>
        )
    })
    const listData = [
        {
            icon : icon3,
            title : t('page.introduction.section3.gia-tri-cot-loi-title'),
            list : [
                {
                    title : t('page.introduction.section3.gia-tri-cot-loi.tin-cay-label'),
                    text :  t('page.introduction.section3.gia-tri-cot-loi.tin-cay-text')
                },
                {
                    title : t('page.introduction.section3.gia-tri-cot-loi.tien-ich-label'),
                    text :  t('page.introduction.section3.gia-tri-cot-loi.tien-ich-text')
                },
                {
                    title : t('page.introduction.section3.gia-tri-cot-loi.tan-tinh-label'),
                    text :  t('page.introduction.section3.gia-tri-cot-loi.tan-tinh-text')
                }
            ]
        }
    ]
    const lists = listData.map((e,index) => {
        const listItems = e.list.map((element,index) => <li className='pb-3' key={index}><p><b>{element.title}: </b>{element.text}</p></li>)
        return (
            <div className='d-flex column-gap-3 ' key={index}>
                <div className='p-3 d-flex justify-content-center align-items-center flex-shrink-0' style={{width : '70px',height : '70px',backgroundColor : '#006CE7',borderRadius : '5px'}}>
                    <img src={e.icon} alt='icon3'/>
                </div>
                <div>
                    <h6 style={{color : '#006CE7',fontWeight : '700'}}>{e.title}</h6>
                    <ul  style={{color : '#4d4d4d'}}>
                        {listItems}
                    </ul>
                </div>
            </div>
        )
    })

    return(
        <section id='su-menh'>
            <div className="container">
                <h2 style={{color : '#4d4d4d',textTransform : 'uppercase'}} className='text-center pb-4'>{t('common.su-menh-tam-nhin-gia-tri-cot-loi')}</h2>
                <div className='container__item--zigzag'>
                    <div className="row row-gap-3 pb-4">
                        <div className='col-12 col-lg-6'>
                            <img loading='lazy' src={bg1} alt='background1' width='100%'/>
                        </div>
                        <div className='col-12 col-lg-6'>
                            {paragraph}
                        </div>
                    </div>
                    <div className="row row-gap-3 ">
                        <div className='col-12 col-lg-6'>
                            <img loading='lazy' src={bg2} alt='background2' width='100%'/>
                        </div>
                        <div className='col-12 col-lg-6'>
                            {lists}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}