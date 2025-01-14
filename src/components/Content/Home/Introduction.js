import { useTranslation } from 'react-i18next'
import Button from '../../button/Button'
import LeftScrollContainer from '../../scroller/LeftScroll'
import ResponsiveHeader from '../../text/ResponsiveHeader'
import Description from '../../text/Description'
export default function Introduction(){
    const {t} = useTranslation()
    return(
        <section id="home__introduction">
            <div className="container">
                <div className="text-center d-flex flex-column align-items-center mb-4">
                    <ResponsiveHeader style={{color : '#4D4D4D'}}>
                       {
                            t('common.gioi-thieu-ve-amitech')
                       }
                    </ResponsiveHeader>
                    <Description style={{color : 'black'}} >
                        <span className='text__weight--lg' style={{color : '#4D4D4D'}}>
                            AMITECH    
                        </span> - {t('page.home.gioi-thieu.description')}
                    </Description>
                </div>
                <div className="row g-5">
                    <div className="col-12 col-lg-6 mb-4 text-center text-lg-start">
                        <img src="/img4.png" className='mw-100 ' alt="IntroductionImage"/>
                    </div>
                    <div className="col-12 col-lg-6" style={{minHeight : '400px'}}>
                        <LeftScrollContainer style={{height : '300px'}}>
                            <h4 style={{color : '#002A9E',fontWeight : '600'}}>{t('page.home.gioi-thieu.diem-uu-viet')}</h4>
                            <ul className='pb-3' style={{color : '#152D52'}} >
                                <li>
                                    <h6>{t('page.home.gioi-thieu.diem-uu-viet-1')}</h6>
                                </li>
                                <li>
                                    <h6>{t('page.home.gioi-thieu.diem-uu-viet-2')}</h6>
                                </li>
                                <li>
                                   <h6> {t('page.home.gioi-thieu.diem-uu-viet-3')}</h6>
                                </li>
                            </ul>
                            <h4 className='pb-3' style={{color : '#152D5280'}}>
                                {t('page.home.gioi-thieu.san-pham-chat-luong')}
                            </h4>
                            <h4 className='pb-3' style={{color : '#152D5280'}}> 
                                {t('page.home.gioi-thieu.tu-van-ho-tro')}
                            </h4>
                            <h5 style={{visibility : 'hidden',height : "500px"}}>
                            </h5>
                        </LeftScrollContainer>  
                        <div className='pb-5'></div>               
                        <div className='row g-4'>
                            <div className='col-12 col-sm-auto'>
                                <Button>
                                        {t('button.tim-hieu-them')}
                                </Button>
                            </div>
                            <div className='col-12 col-sm-auto'>
                                <Button 
                                    style={{backgroundImage : 'linear-gradient(90deg, #FF512F 0%, #F09819 100%)'}}>
                                        {t('button.tai-ho-so')}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}