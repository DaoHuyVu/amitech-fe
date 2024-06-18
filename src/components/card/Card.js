import './card.css'
export default function Card({src,style,children,imgStyle}){
    return(
        <div className='bg-img-card' style={style}>
            <img src={src} alt='CardImage' className='card__image' style={imgStyle}/>
            <div className='card__content'>{children}</div>
        </div>
    )
}