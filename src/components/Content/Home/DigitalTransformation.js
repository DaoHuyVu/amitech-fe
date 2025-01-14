import { useTranslation } from 'react-i18next'
import Description from '../../text/Description'
export default function DigitalTransformation(){
    const {i18n,t} = useTranslation()
    return(
        <section id='home__digital-transformation'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-xl-5 d-flex align-items-center text-center text-xl-start mb-3'>
                        <span>
                            <h1 className="display-5" style={{textTransform : 'uppercase',fontWeight : '800'}}>
                                {
                                    t("page.home.chuyen-doi-so.title")
                                }
                            </h1>
                            <Description style={{color : '#ffffff99',lineHeight : '36px'}} className='h4'>
                               {
                                    t("page.home.chuyen-doi-so.description")
                               }
                            </Description>
                        </span>
                    </div>
                    <div className='col-12 col-xl-1'></div>
                    <div className='col-12 col-xl-6 text-xl-start'>
                        <img 
                            src="/img1.png"
                            alt='CDS'
                            className='m-auto'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}