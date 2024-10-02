import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function NavBarItemDropDown({className='',link,style,name,children}){
    const cl = `nav-dropdown-item nav-item ${className}`
    return(
        <div className="nav-dropdown-area">
            <NavLink to={link} style={style} 
             className={({isActive}) =>  
                isActive ? `${cl} nav-item--active` : `${cl}`
             }>
                <p>{name}</p>
                <FontAwesomeIcon icon={faCaretDown} className="menu-item-dropdown-icon"/>
            </NavLink>
            {children}
        </div>
    )
}