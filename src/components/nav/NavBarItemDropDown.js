import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
export default function NavBarItemDropDown({className='',link,style,name}){
    const cl = `nav-dropdown-item ${className}`
    return(
            <NavLink to={link} style = {style}
             className={({isActive}) =>  
                isActive ? `${cl} nav-item--active` : `${cl} nav-item--pending`
             }>
                <p>{name}</p>
                <FontAwesomeIcon icon={faCaretDown}/>
            </NavLink>
    )
}