export default function Image11Card({style,src}){
    return (
        <div style={style} className="aspect-1-1-image-wrapper">
            <img src={src} className="aspect-retained-image card-image" alt='Card'/>
        </div>
    )
}