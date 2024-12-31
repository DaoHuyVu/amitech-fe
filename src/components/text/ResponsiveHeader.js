import styles from './header.module.css'
export default function ResponsiveHeader({children,className='',...delegated}){
    const cl = `${styles.header} ${className}`
    return(
        <h1 {...delegated} className={cl}>
            {children}
        </h1>
    )
}