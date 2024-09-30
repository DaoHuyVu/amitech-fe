export default function aspect11Wrapper({children,style,className=''}){
    return (
        <div style={style} className={`aspect-1-1-image-wrapper ${className}`}>
            {children}
        </div>
    )
} 