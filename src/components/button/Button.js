import './button.css'
export default function Button({type,style,children,onClick}){
    return(
       <button type={type} className='button' style={style} onClick={onClick}>
           <div className='button__body'>
                {children}
           </div>
       </button>
    )
}