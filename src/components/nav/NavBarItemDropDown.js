import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
export default function NavBarItemDropDown(props){
    return(
            <a href={props.link} style = {props.style} className="nav-dropdown-item">
                <p>{props.name}</p>
                <FontAwesomeIcon icon={faCaretDown}/>
            </a>
    )
}