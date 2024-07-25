import './button.css'
export default function Button({type='button',style,children,onClick,className=''}){
    return(
       <button type={type} className={`${className} button`} style={style} onClick={onClick}>
           <div className='button__body'>
                {children}
           </div>
       </button>
    )
}