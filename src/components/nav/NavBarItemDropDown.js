import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

export default function NavBarItemDropDown({className='',link,style,name,children}){
    const cl = `nav-dropdown-item nav-item ${className}`
    const ref = useRef()
    const handleMouseEnter = () => {
        ref.current.classList.add('nav-dropdown-area--menu-show')
    }
    const handleMouseLeave = () => {
        ref.current.classList.remove('nav-dropdown-area--menu-show')
    }
    return(
        <div ref={ref} className="nav-dropdown-area" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <NavLink to={link} style={style} end
             className={({isActive}) =>  
                isActive ? `${cl} nav-item--active` : `${cl}`
             }>
                <p>{name}</p>
                <FontAwesomeIcon icon={faCaretDown}/>
            </NavLink>
            {children}
        </div>
    )
}