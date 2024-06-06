export default function NavBarMenuItem(props){
    return (
        <li className="nav-bar__nav-item" >
            <a href={props.link} className="nav-item__link" style={props.style}>{props.name} </a>
        </li>
    )
}