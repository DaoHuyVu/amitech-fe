import './button.css'
export default function Button({type='button',style,children,className=''}){
    return(
       <button type={type} className={`${className} button`} style={style} >
           <div className='button__body'>
                {children}
           </div>
       </button>
    )
}