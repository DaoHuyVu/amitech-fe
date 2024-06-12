import './nav-bar.css'
export default function HorizontalNavBar({children,style}){
    return(
        <div className="nav-bar" style={style}>
            {children}
        </div>
    )
}