import './card.css'
export default function TCard({src,children,style,className=''}){
    return (
        <div className={`card-container ${className}`} style={style}>
            {children}
        </div>
    )
}