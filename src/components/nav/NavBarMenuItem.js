
export default function NavBarMenuItem({link,children,style}){
    return (
        <a href={link} className="nav-bar__nav-item" style={style}>
            {children}
        </a>
    )
}