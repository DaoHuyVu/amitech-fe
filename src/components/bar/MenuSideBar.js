import { useContext, useState,} from 'react'
import './sidebar.css'
import ImageButton from '../button/ImageButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faXmark } from '@fortawesome/free-solid-svg-icons'
import { NavLink} from 'react-router-dom'
import { sidebarContext } from '../../layout/DefaultLayout'
import CloseButtonSVG from '../../assets/svg/multiply-svgrepo-com.svg'
import SearchComponent from '../newComponents/search/SearchComponent'
import LanguagePickerDropdown from '../newComponents/dropdown/LanguagePickerDropdown'
const MenuSideBar = ({className='',items,isShowSideBar}) => {
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
        <div id="sidebar-container" className={`${className} ${isShowSideBar ? 'sidebar-container--show' : 'sidebar-container--collapse'}`}>
            <div id='overlay-background' onClick={handleClose}></div>
            <div id='sidebar' className={`${isShowSideBar ? 'sidebar--show' : 'sidebar--collapse'}`}>
                <div id='menu'>
                        <div  className='d-flex flex-row align-items-center p-3 justify-content-between column-gap-3'>
                            <SearchComponent style={{width : 'auto'}}/>
                            <ImageButton className='menu-close-btn flex-shrink-0' onClick={handleClose}>
                                <FontAwesomeIcon icon={faXmark}/>
                            </ImageButton>
                        </div>
                    <div id='menu-content'>
                        {menuItems}
                    </div>
                    <div className='p-3'>
                        <LanguagePickerDropdown />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MenuSideBar