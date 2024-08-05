export default function CardContent({children,className='',style}){
    return (
        <div className={`${className} card-content`} style={style}>
            {children}
        </div>
    )
}