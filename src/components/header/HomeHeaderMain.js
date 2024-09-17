import HorizontalNavBar from "../nav/HorizontalBar.js";
import NavBarMenuItem from '../nav/NavBarMenuItem.js';
import Logo from '../Logo.js'
import logo from '../../assets/logos/Group 558.png'
import NavBarItemDropDown from "../nav/NavBarItemDropDown.js";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageButton from "../button/ImageButton.js";
import { useContext, useEffect, useState} from "react";
import { sidebarContext } from "../../layout/DefaultLayout.js";
import { getPrimaryNavigation } from "../../services/header.js";
import SubMenuItems from "../nav/SubMenuItems.js";
export default function HomeHeaderMain(){
    const {setIsShowSideBar} = useContext(sidebarContext)
    const [navigations,setNavigations] = useState([])
    useEffect(() => {
        const fetchNavs = async () => {
            try{
                const res = await getPrimaryNavigation()
                setNavigations(res.data.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchNavs()
    },[])
    const navBarItems = navigations.map((navigation) => {
        return navigation.hasChildren ? 
        <NavBarItemDropDown key={navigation.id} name={navigation.name} link = {navigation.slug}>
            <SubMenuItems items={navigation.childrenNavigations} parent={navigation.slug} />
        </NavBarItemDropDown>
        :
        <NavBarMenuItem link = {navigation.slug} key={navigation.id}>
            <p>{navigation.name}</p>
        </NavBarMenuItem>
    })
    const handleOpen = () => {
        setIsShowSideBar(true)
    }
    return(
        <div id="header-home-main">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <Logo img={logo} to='/'/>
                    <HorizontalNavBar className="d-xxxl-flex d-none">
                        {navBarItems}
                    </HorizontalNavBar>
                    <ImageButton 
                        className='d-xxxl-none'
                        onClick={handleOpen}>
                        <FontAwesomeIcon icon={faBars}/>
                    </ImageButton>
                </div>
            </div>
        </div>
    )
}