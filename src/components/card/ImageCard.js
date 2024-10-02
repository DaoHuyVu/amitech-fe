
export default function ImageCard({style,src,className='',AspectWrapper}){
    return (
        <AspectWrapper style={style} className={className}>
            <img loading='lazy' src={src} className="aspect-retained-image card-image" alt='Card' />
        </AspectWrapper>
    )
}