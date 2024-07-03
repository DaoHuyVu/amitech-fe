import './button.css'
export default function Button({style,children}){
    return(
       <div className="custom-button-wrapper" style={style}>
            <div className='custom-button'>
                {children}
            </div>
        </div>
    )
}