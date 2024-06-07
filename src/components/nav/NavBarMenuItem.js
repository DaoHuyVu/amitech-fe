
export default function NavBarMenuItem(props){
    return (
        <li className="nav-bar__nav-item" style={props.style}>
            <a href={props.link} className="nav-item__link">{props.name} </a>
        </li>
    )
}