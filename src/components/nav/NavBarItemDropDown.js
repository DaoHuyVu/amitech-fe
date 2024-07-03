import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function NavBarItemDropDown(props){
    return(
            <Link to={props.link} style = {props.style} className="nav-dropdown-item">
                <p>{props.name}</p>
                <FontAwesomeIcon icon={faCaretDown}/>
            </Link>
    )
}