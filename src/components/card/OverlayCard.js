export default function OverlayCard({style,className='',children}){
    return(
        <div className={`overlay-card ${className}`} style={style}>
            {children}
        </div>
    )
}