import './scroller.css'
export default function Scroller({style,children,className=''}){
    // Remember to specify height
    return(
        <div className={`${className} scroller`} style={style}>
            <div className='scroller__content'>
                {children}                     
            </div>
        </div>         
    )
}