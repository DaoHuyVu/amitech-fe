import {Link} from 'react-router-dom'
export default function NavBarMenuItem({link,children,style}){
    return (
        <Link to={link} className="nav-bar__nav-item" style={style}>
            {children}
        </Link>
    )
}