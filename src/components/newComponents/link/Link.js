import { Link } from "react-router-dom";
import styles from './Link.module.css'
export default function CustomLink({to,children,className='',...delegated}){  
    return(
        <Link
            {...delegated} 
            to={to}
            className={`${styles.link} `}
        >
            {children}
        </Link>
    )
}