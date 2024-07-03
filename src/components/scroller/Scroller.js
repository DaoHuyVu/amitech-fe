import './scroller.css'
export default function Scroller({style,children}){
    // Remember to specify height
    return(
        <div className='custom-scroller' style={style}>
            <div className='custom-scroller__content'>
                {children}                     
            </div>
        </div>         
    )
}