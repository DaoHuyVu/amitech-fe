import './card.css'
export default function Card({children,style,className=''}){
    return (
        <div className={`card-container ${className}`} style={style}>
            {children}
        </div>
    )
}