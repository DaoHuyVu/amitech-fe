import Banner from "../../common/BannerWrapper";
import img1 from '../../../assets/images/1d884ba8-295c-4838-9fd7-4539555f9eb1 1.png'
import { useTranslation } from "react-i18next";
export default function ActivitiesSection1(){
    const {t} = useTranslation()
    return(
        <Banner     
            imgSrc={img1}
            title = {t('page.activities.title')}
            description= {t('page.activities.description')}
        />
    )
}