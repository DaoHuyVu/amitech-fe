export default function Image23Card({style,src,className=''}){
    return (
        <div style={style} className={`aspect-2-3-image-wrapper ${className}`}>
            <img src={src} className="aspect-retained-image card-image" alt='Card'/>
        </div>
    )
}