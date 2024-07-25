import { Link } from "react-router-dom"
export default function Navigatable({to,className='',style='',children}){
    return(
        <Link to={to} className={`${className} navigatable`} style={style}>
            {children}
        </Link>
    )
}