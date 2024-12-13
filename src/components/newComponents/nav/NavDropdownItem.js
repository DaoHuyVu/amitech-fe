import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Spacer from '../spacer/Spacer'
import NavItem from './NavItem'
import styles from './NavDropdownItem.module.css'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
export default function NavDropdownItem({children,to,menuItems,...delegated}){
    return(
        <div className={`${styles.container}`} {...delegated}>
            <div>
                <NavItem to={to} end>
                    {children}
                    <Spacer size={8}/>
                    <FontAwesomeIcon icon={faCaretDown} className={`${styles.dropdownIcon}`}/>
                </NavItem>
            </div>
            <nav className={`${styles.dropdownContainer}`}>
                {
                    menuItems.map((item,idx) => {                        
                        return (
                            <NavItem key={idx} to={`${to}${item.slug}`} className={`${styles.dropdownItem}`}>
                                {item.name}
                            </NavItem>
                        )
                    })
                }
            </nav>
        </div>
    )
}