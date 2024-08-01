import { useState } from 'react'
import './hero-image.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
export default function HoverableHeroImage({src,style,title,children,className='',slug}){
    const [isVisible,setVisible] = useState(false)
    const handleMouseEnter = () => setVisible(true)
    const handleMouseLeave = () => setVisible(false)
    const cl = `hoverable-hero-image ${className}`
    const bg_style = {
        backgroundImage : `url("${src}")`
    }
    return (
        <div 
            className={cl} style={{...bg_style,...style}} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>

                <p>{title}</p>
            
                {isVisible && 
                    <div className='hero-image-detail '>
                        <p className='mb-3' style={{color : '#00C2FF'}}>{title}</p>
                        <div className='hero-image__text--sm mb-3 hero-image-detail__content'>
                            {children}
                        </div>
                        <Button 
                            className='hero-image__text--sm' style={{color : '#00C2FF',background : 'transparent',border : 'none'}}>    
                                <Link to={slug}>    
                                    Xem thêm &gt;&gt;
                                </Link> 
                        </Button>
                    </div>
                }

        </div>
    )
}