import { NavLink} from 'react-router-dom'
export default function NavBarMenuItem({link,children,style,className=''}){
    const cl = `nav-item ${className}`
    return (
        <NavLink to={link} 
        style={style}
        className={({isActive}) => 
            isActive ? `nav-item--active ${cl}` 
            : `nav-item--pending ${cl}`
        }>
            {children}
        </NavLink>
    )
}