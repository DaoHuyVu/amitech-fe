import './button.css'
export default function ImageButton({type='button',style,children,onClick,className=''}){
    return(
       <button type={type} className={`${className} image-button `} style={style} onClick={onClick}>
           <div className='button__body'>
                {children}
           </div>
       </button>
    )
}