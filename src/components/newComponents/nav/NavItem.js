import { NavLink } from "react-router-dom";
import styles from './NavItem.module.css'
export default function NavItem({to,children,className='',...delegated}){  
    return(
        <NavLink 
            {...delegated} 
            to={to}
            className={({isActive}) => `${styles.navItem} ${className} ${isActive ? styles.active : ''}`}
        >
            {children}
        </NavLink>
    )
}