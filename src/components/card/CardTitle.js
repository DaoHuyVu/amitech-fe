export default function CardTitle({children,className='',style,maxLines=4}){
    const boxStyle = {
        WebkitLineClamp : maxLines,
        height : `calc(35px * ${maxLines})` // line height * maxLines 
    }
    return(
        <p className={`card-content__title ${className}`} style={{...boxStyle,...style}}>
            {children}
        </p>
    )
}