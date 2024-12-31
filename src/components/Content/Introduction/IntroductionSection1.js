import bg1 from '../../../assets/images/eb8e4180959645c81c87445 1.png'
import bg2 from '../../../assets/images/IMG_7629 1.png'
import bg3 from '../../../assets/images/e55b1bec035ad004894b 2.png'
import bg4 from '../../../assets/images/image 174.png'
import { useTranslation } from 'react-i18next'
import ScalableHeader from '../../text/ResponsiveHeader'
import Description from '../../text/Description'
export default function IntroductionSection1(){
    const {t} = useTranslation()
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
            <div className="container position-absolute start-50 translate-middle" style={{top : '50%'}}>
                <div className='text-center'>
                    <ScalableHeader style={{marginBottom : '16px'}}>{t('page.introduction.section1.title')}</ScalableHeader>
                    <Description style={{fontSize : '20px'}}>{t('page.introduction.section1.description')}</Description>
                </div>
            </div>
            <div className='container position-absolute top-100 translate-middle start-50'>
                <div className='row d-xl-flex d-none'>
                    {columns}
                </div>
            </div>            
        </section>
        
    )
}