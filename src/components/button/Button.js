import './button.css'
export default function Button({style,children}){
    return(
       <span className="custom-button" style={style}>
            {children}
        </span>
    )
}