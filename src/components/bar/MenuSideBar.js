import { forwardRef, useContext,} from 'react'
import './sidebar.css'
import ImageButton from '../button/ImageButton'
import { Link} from 'react-router-dom'
import { sidebarContext } from '../../pages/home/Home'
const MenuSideBar = forwardRef(({behavior='',className='',items},ref) => {
    const {setIsShowSideBar} = useContext(sidebarContext) 

    const handleClose = () => {
        setIsShowSideBar(false)
    }
    const menuItems = items.map((item,index) => {
        return(
            <Link to={item.link} className='menu-item' key={index} onClick={handleClose} >
                    {item.name}
            </Link>
        )
    })
    return(
        <div id="sidebar-container" className={`${behavior} ${className}`} >
            <div id='overlay-background' onClick={handleClose}></div>
            <div id='sidebar' ref={ref}>
                <div id='menu'>
                        <ImageButton onClick={handleClose}>
                            <h4 className='fw-bold'>X</h4>
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