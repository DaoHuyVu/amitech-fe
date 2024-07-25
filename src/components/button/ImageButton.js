import './button.css'
export default function ImageButton({type='button',style,children,onClick,className=''}){
    return(
       <button type={type} className={`${className} button border-0`} style={style} onClick={onClick}>
           <div className='button__image'>
                {children}
           </div>
       </button>
    )
}