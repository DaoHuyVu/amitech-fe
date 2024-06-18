import './scroller.css'
export default function LeftScrollContainer({style,children}){
    return(
        <div className='overflow-scroll-container' style={style}>
            <div className='overflow-scroll-container__content'>
                {children}                     
            </div>
        </div>         
    )
}