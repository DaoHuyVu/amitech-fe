
export default function ImageCard({style,src,className='',AspectWrapper}){
    return (
        <AspectWrapper style={style} className={className}>
            <img src={src} className="aspect-retained-image card-image" alt='Card' />
        </AspectWrapper>
    )
}