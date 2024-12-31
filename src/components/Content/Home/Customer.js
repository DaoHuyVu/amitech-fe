import bg1 from '../../../assets/images/image 190.png'
import bg2 from '../../../assets/images/image 193.png'
import bg3 from '../../../assets/images/image 194.png'
import bg4 from '../../../assets/images/image 195.png'
import bg5 from '../../../assets/images/image 196.png'
import bg6 from '../../../assets/images/image 197.png'
import bg7 from '../../../assets/images/gircontactl3.png'
import Input from '../../input/Input'
import Button from '../../button/Button'
import { Form } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
export default function Customer(){
    const {t} = useTranslation()
    const customerData = [
        bg1,bg2,bg3,bg4,bg5,bg6
    ]
    return (
        <section id="home_customer">
            <div className="container">
                <div className="text-center pb-4 ">
                    <h2 style={{fontWeight : '700',color : '#4D4D4D',textTransform : 'uppercase'}}>{t('common.doi-tac-va-khach-hang')}</h2>
                </div>
                <div className="row g-3 mb-5">
                    {customerData.map((e,index)=>{
                        return (
                            <div 
                            key={index} 
                            className='col-12 col-sm-6 col-lg-4 col-xxl-2'>
                                <div className='d-flex justify-content-center align-items-center' style={{backgroundColor : 'white',height : '100px'}} >
                                    <img loading='lazy' src={e} alt='customerLogo' style={{minHeight : '60px'}} className='mw-100'/>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="row" style={{background :'linear-gradient(360deg, #006CE7 0%, #0E349C 100%)'}}>
                    <div className='col-12 col-lg-6 text-center order-2'>
                        <img loading='lazy' src={bg7} alt ='PriceImg' className='mw-100' /> 
                    </div>
                    <Form className='col-12 col-lg-6 d-flex flex-column py-4 justify-content-center
                     align-items-center align-items-lg-start order-1 order-lg-2 row-gap-4' >
                        <h4>{t('form.header.dang-ky-nhan-tu-van-mien-phi')}</h4>
                        <Input  placeholder={t('form.fields.ho-ten')} className='w-75' type='text' required/>
                        <Input  placeholder={t('form.fields.so-dien-thoai')} type='number'className='w-75' required/>
                        <Input  placeholder={t('form.fields.email')} type='email' className='w-75' required/>
                        <Input  placeholder={t('form.fields.cong-ty')} type='text' className='w-75' required/>
                        <Button
                            type='submit' style={{border : 'none',backgroundColor : '#00C2FF'}}>
                                {t('button.nhan-tu-van-mien-phi')}
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    )
}