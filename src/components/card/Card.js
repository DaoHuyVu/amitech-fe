import './card.css'
export default function Card({src,style,children}){
    return(
        <div className='bg-img-card' style={style}>
            <img src={src} alt='CardImage' className='card__image'/>
            <div className='card__content'>{children}</div>
        </div>
    )
}