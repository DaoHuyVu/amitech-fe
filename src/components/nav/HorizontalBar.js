import './nav-bar.css'
export default function HorizontalBar({children,style,className=''}){
    return(
        <div className={`horizontal-bar ${className}`} style={style} >
            {children}
        </div>
    )
}