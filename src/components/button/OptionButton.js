import './button.css'
export default function OptionButton({link,style,children,className=''}){
    return(
       <a href={link} className={`${className} button button-option`} style={style}>
           <p className='button__body' >
                {children}
           </p>
       </a>
    )
}