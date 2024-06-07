import NavBarMenuItem from "./NavBarMenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
export default function NavBarItemDropDown(props){
    return(
        <span className="nav-dropdown-item">
            <NavBarMenuItem name={props.name} link={props.link} style={props.style}/>
            <FontAwesomeIcon icon={faCaretDown} style={props.style}/>
        </span>
    )
}