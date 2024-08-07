import { forwardRef, useContext, useState,} from 'react'
import './sidebar.css'
import ImageButton from '../button/ImageButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { NavLink} from 'react-router-dom'
import { sidebarContext } from '../../layout/DefaultLayout'
const MenuSideBar = forwardRef(({behavior='',className='',items},ref) => {
    const {setIsShowSideBar} = useContext(sidebarContext) 
    // Store the menu item id to indicate whether it's showing children or not
    const [isShowChildren,setShowChildren] = useState(null)
    const handleClose = () => {
        setIsShowSideBar(false)
    }
    const handleShowChildren = (id) => {
        if(isShowChildren === id){
            setShowChildren(null)
        }
        else
            setShowChildren(id)
    }
    const menuItems = items.map((item) => {
        return(
            <div key={item.id} className='menu-item-container'>
                <div className='menu-item'>
                    <NavLink to={item.slug} end reloadDocument
                    className={({isActive}) => isActive ? 'menu-item__title-active menu-item__title' : 'menu-item__title'}>
                        {item.name}
                    </NavLink>
                        {
                            item.hasChildren && 
                            (
                                <ImageButton style={{width : '1rem',height : '1rem'}} onClick={() => handleShowChildren(item.id)}>
                                    {isShowChildren === item.id ? 
                                    <FontAwesomeIcon className='menu-item__accordion-icon' icon={faCaretUp}/> :
                                    <FontAwesomeIcon className='menu-item__accordion-icon' icon={faCaretDown}/>}
                                </ImageButton>
                            )
                        }
                </div>
                <div className={`submenu-items-container ${isShowChildren === item.id ? 'submenu-items-container--show' : ''}` }>
                    {
                        item.childrenNavigations.map((child) => {
                            return (
                                <NavLink to={`${item.slug}${child.slug}`}  onClick={handleClose}
                                className={({isActive}) => isActive ? 'menu-item__title-active menu-item__title' : 'menu-item__title'}>
                                    {child.name}
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        )
    })
    return(
        <div id="sidebar-container" className={`${behavior} ${className}`} >
            <div id='overlay-background' onClick={handleClose}></div>
            <div id='sidebar' ref={ref}>
                <div id='menu'>
                        <ImageButton className='menu-close-btn' onClick={handleClose}>
                            <h5>X</h5>
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