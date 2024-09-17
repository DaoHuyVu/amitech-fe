    import './nav-bar.css'
import NavBarMenuItem from './NavBarMenuItem'
export default function SubMenuItems({className='',style,items,parent}){
    return(
        <div className={`submenu-items ${className}`} style={style} >
            {
                items.map(item => {
                    return (
                        <NavBarMenuItem link={`${parent}${item.slug}`} key={item.id} className='p-3'>
                            {item.name}
                        </NavBarMenuItem>
                    )
                })
            }
        </div>
    )
}