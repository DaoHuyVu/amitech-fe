export default function Image34Card({style,src,className=''}){
    return (
        <div style={style} className={`aspect-3-4-image-wrapper ${className}`}>
            <img src={src} className="aspect-retained-image card-image" alt='Card'/>
        </div>
    )
}