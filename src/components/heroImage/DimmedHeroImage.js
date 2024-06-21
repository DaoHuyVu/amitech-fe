import './hero-image.css'
export default function DimmedHeroImage({src,style,children}){
    const bgStyle = {
        backgroundImage : `url("${src}")`
    }
    return(
        <div className='hero-image' style={{...style,...bgStyle}}>
            <div className='hero-image__dimmed-bg--dark'>
                {children}
            </div>
        </div>
    )
}