import './scroller.css'
export default function Scroller({style,children}){
    // Remember to specify height
    return(
        <div className='scroller' style={style}>
            <div className='scroller__content'>
                {children}                     
            </div>
        </div>         
    )
}