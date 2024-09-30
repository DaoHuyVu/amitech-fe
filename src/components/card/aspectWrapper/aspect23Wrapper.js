export default function aspect11Wrapper({children,style,className=''}){
    return (
        <div style={style} className={`aspect-2-3-image-wrapper ${className}`}>
            {children}
        </div>
    )
} 