import { useTranslation } from 'react-i18next'
import bg1 from '../../../assets/images/IMG_8682 1.png'
import Button from '../../button/Button'
import OptionButton from '../../button/OptionButton'
import ResponsiveHeader from '../../text/ResponsiveHeader'
export default function IntroductionSection2(){
    const {t} = useTranslation()
    const navigations = [
        t('common.gioi-thieu'),t('common.su-menh-tam-nhin-gia-tri-cot-loi'),t('common.hinh-anh-hoat-dong'),t('common.chung-chi-chung-nhan'),t('common.tuyen-dung')
    ]
    const navigationId = [
        '#gioi-thieu','#su-menh','#hinh-anh-hoat-dong','#chung-chi','#tuyen-dung'
    ]
    const columns = navigations.map((e,index) => {
        return(
            <OptionButton link={`${navigationId[index]}`} key={index} className='col-auto'>
                {e}
            </OptionButton>
        )
    })
    return(
        <section id="gioi-thieu">
            <div className="container d-flex flex-column align-items-center">
                <div className="row d-flex justify-content-center gap-3 pb-5">
                    {columns}
                </div>
                <div className="text-center">
                    <ResponsiveHeader style={{color : '#4d4d4d',textTransform : 'uppercase'}} className="mb-4">{t('common.gioi-thieu-ve-amitech')}</ResponsiveHeader>
                </div>
                <div className='row d-flex row-gap-4 pb-4'>
                    <div className='col-12 col-xxl-6 mx-auto' style={{maxWidth : '700px'}}>
                        <div className='retained-4-7-image-wrapper'>
                            <img className='aspect-retained-image' src={bg1} alt=""/>
                        </div>
                    </div>
                    <div className='col-12 col-xxl-6'>
                        <p style={{color : '#4D4D4D'}}>
                            {t("page.introduction.section2.description-1")}
                        </p>
                        <br/>
                        <p style={{color : '#4D4D4D'}}>
                            {t("page.introduction.section2.description-2")}
                        </p>
                        <br />
                        <p style={{color : '#4D4D4D'}}>
                            {t("page.introduction.section2.description-3")}
                        </p>
                    </div>
                </div>
                <Button style={{background : 'linear-gradient(90deg, #FF512F 0%, #F09819 100%)'}}>
                    <p>{t('button.tai-ho-so')}</p>
                </Button>
            </div>
        </section>
    )
}