import { NavLink} from 'react-router-dom'
export default function NavBarMenuItem({link,children,style,className=''}){
    const cl = `nav-item-regular nav-item ${className}`
    return (
        <NavLink to={link} end
        style={style}
        className={({isActive}) => 
            isActive ? `nav-item--active ${cl}` 
            : `${cl}`
        }>
            {children}
        </NavLink>
    )
}