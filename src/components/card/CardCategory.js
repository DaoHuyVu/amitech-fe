export default function CardCategory({className='',style,children}){
    return(
        <div className={`card-content__category ${className}`} style={style}>
            {children}
        </div>
    )
}