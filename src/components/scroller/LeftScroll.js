import './scroller.css'
export default function LeftScroller({style,children}){
    // Remember to specify height
    return(
        <div className='scroller left-scroller' style={style}>
            <div className='left-scroller__content'>
                {children}                     
            </div>
        </div>         
    )
}