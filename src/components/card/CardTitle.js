export default function CardTitle({children,className='',style,maxLines=4}){
    const boxStyle = {
        WebkitLineClamp : maxLines,
        height : `calc(35px * ${maxLines})` // line height * maxLines 
    }
    return(
        <h4 className={`card-content__title ${className}`} style={{...style,...boxStyle}}>
            {children}
        </h4>
    )
}