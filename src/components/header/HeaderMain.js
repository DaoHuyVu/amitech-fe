import { useContext, useEffect, useState } from "react"
import { getSecondaryNavigations } from "../../services/navigation"
import NavItem from "../newComponents/nav/NavItem"
import NavDropdownItem from "../newComponents/nav/NavDropdownItem"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ImageButton from "../button/ImageButton"
import { sidebarContext } from "../../layout/DefaultLayout"
import Logo from "../Logo"
export default function HeaderMain(){
    const {setIsShowSideBar} = useContext(sidebarContext)
    const [navigations,setNavigations] = useState(null)
    useEffect(() => {
        const fethNavs = async () => {
            try{
                const nav = await getSecondaryNavigations()
                setNavigations(nav.data.data) 
            }catch(ex){
                console.log(ex)
            }
        }
        fethNavs()
    },[])
    return(
        <div id="header-main">
            {
                navigations &&
                <div className="container">
                    <nav className="d-none justify-content-between d-xxxl-flex">
                        {
                            navigations.map((nav,idx) => {
                                return nav.childrenNavigations.length > 0 ? 
                                (
                                    <NavDropdownItem menuItems={nav.childrenNavigations} key={idx} to={nav.url}>
                                        {nav.name}
                                    </NavDropdownItem>
                                ):(
                                    <NavItem key={idx} to={nav.url}>
                                        {nav.name}
                                    </NavItem>
                                )
                            })
                        }
                    </nav>
                    <div className="d-flex d-xxxl-none justify-content-between align-items-center">
                        <Logo to="/" img="/logo-ami-2.png" className="d-xxxl-none"/>
                        <ImageButton 
                            className='d-xxxl-none text-white'
                            onClick={() => setIsShowSideBar(true)}>
                            <FontAwesomeIcon icon={faBars}/>
                        </ImageButton>
                    </div>
                </div>
            }
        </div>
    )
}