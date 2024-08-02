import { forwardRef, useContext,} from 'react'
import './sidebar.css'
import ImageButton from '../button/ImageButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { NavLink} from 'react-router-dom'
import { sidebarContext } from '../../layout/DefaultLayout'
const MenuSideBar = forwardRef(({behavior='',className='',items},ref) => {
    const {setIsShowSideBar} = useContext(sidebarContext) 

    const handleClose = () => {
        setIsShowSideBar(false)
    }
    const menuItems = items.map((item) => {
        return(
            <div key={item.id} className='menu-item-container'>
                <NavLink to={item.slug}  onClick={handleClose}
                className={({isActive}) => isActive ? 'menu-item-active menu-item' : 'menu-item'}>
                    {item.name}
                </NavLink>
                {item.hasChildren && <FontAwesomeIcon className='accordion-icon' icon={faCaretDown}/>}

            </div>
        )
    })
    return(
        <div id="sidebar-container" className={`${behavior} ${className}`} >
            <div id='overlay-background' onClick={handleClose}></div>
            <div id='sidebar' ref={ref}>
                <div id='menu'>
                        <ImageButton onClick={handleClose}>
                            <h5 style={{color : 'black'}}>X</h5>
                        </ImageButton>
                    <div id='menu-content'>
                        {menuItems}
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MenuSideBar