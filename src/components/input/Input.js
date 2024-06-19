import './input.css'
export default function Input({placeholder,style,className=''}){
    const cl = `input ${className}`
    return(
        <input placeholder={placeholder} style={style} className={cl} />
    )
}