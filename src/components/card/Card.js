import './card.css'
export default function Card({src,style,children}){
    return(
        <div className='bg-img-card retained-4-7-image-wrapper' style={style}>
            <img src={src} alt='CardImage' className='card__image retained-4-7-image' />
            <div className='card__content'>
                {children}
            </div>
        </div>
    )
}