import { forwardRef, useContext, useState,} from 'react'
import './sidebar.css'
import ImageButton from '../button/ImageButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { NavLink} from 'react-router-dom'
import { sidebarContext } from '../../layout/DefaultLayout'
import CloseButtonSVG from '../../assets/svg/multiply-svgrepo-com.svg'
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
                    <NavLink to={item.slug} 
                    className={({isActive}) => isActive ? 'menu-item__title-active menu-item__title' : 'menu-item__title'}>
                        {item.name}
                    </NavLink>
                        {
                            item.childrenNavigations.length > 0 && 
                            (
                                <ImageButton 
                                    className={`${isShowChildren === item.id ? 'menu-item--children-show' : 'menu-item--children-collapse'}`}
                                    style={{width : '1rem',height : '1rem'}} onClick={() => handleShowChildren(item.id)}>
                                    <FontAwesomeIcon 
                                        className={`menu-item__accordion-icon`}
                                        icon={faCaretDown}
                                    /> 
                                </ImageButton>
                            )
                        }
                </div>
                <div className={`submenu-items-container ${isShowChildren === item.id ? 'expand' : ''}` }>
                    <div className='submenu-items-content'>
                        {
                            item.childrenNavigations.map((child) => {
                                return (
                                <div className='menu-item' key={child.id} >
                                        <NavLink to={`${item.slug}${child.slug}`}  onClick={handleClose} key={child.id}
                                        className={({isActive}) => isActive ? 'menu-item__title-active menu-item__title' : 'menu-item__title'}>
                                            {child.name}
                                        </NavLink>
                                    </div>
                                )
                            })
                        }
                    </div>
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
                            <img src={CloseButtonSVG} alt='Close Button'/>
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