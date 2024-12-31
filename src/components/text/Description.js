import styles from './description.module.css'
export default function Description({children,className='',style}){
    const cl = `${styles.description} ${className}` 
    return(
        <p className={cl} style={style}>
            {children}
        </p>
    )
}