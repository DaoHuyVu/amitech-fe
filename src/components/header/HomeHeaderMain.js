import HorizontalNavBar from "../nav/HorizontalBar.js";
import NavBarMenuItem from '../nav/NavBarMenuItem.js';
import Logo from '../Logo.js'
import logo from '../../assets/logos/Group 558.png'
import NavBarItemDropDown from "../nav/NavBarItemDropDown.js";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageButton from "../button/ImageButton.js";
import { useContext} from "react";
import { sidebarContext } from "../../pages/home/Home.js";
export default function HomeHeaderMain(){
    const {setIsShowSideBar} = useContext(sidebarContext)
    const navBarItems = <>
        <NavBarMenuItem link="/" >
                <p>Trang chủ</p>
        </NavBarMenuItem>
        <NavBarItemDropDown name = 'Giới thiệu' link = "/gioi-thieu"  />
        <NavBarMenuItem link = "/du-an-tieu-bieu" >
            <p>Dự án tiêu biểu</p>
        </NavBarMenuItem>
        <NavBarItemDropDown name = 'Giải pháp chuyển đổi số' link = "/giai-phap-chuyen-doi-so"  />
        <NavBarItemDropDown name = 'Thiết bị & sản phẩn công nghiệp' link = "/thiet-bi-va-san-pham-cong-nghiep"  />
        <NavBarMenuItem link = "/tin-tuc" >
            <p>Tin tức và sự kiện</p>
        </NavBarMenuItem>
        <NavBarMenuItem link = "/bao-gia" >
            <p>Báo giá</p>
        </NavBarMenuItem>
    </>
    const handleOpen = () => {
        setIsShowSideBar(true)
    }
    return(
        <div id="header-home-main" className="px-sm-10">
            <div className="container-fluid my-3">
                <div className="d-flex justify-content-between">
                    <Logo img={logo} to='/'/>
                    <HorizontalNavBar className="d-xxxl-flex d-none">
                        {navBarItems}
                    </HorizontalNavBar>
                    <ImageButton 
                        className='d-xxxl-none'
                        onClick={handleOpen}
                    >
                        <FontAwesomeIcon icon={faBars}/>
                    </ImageButton>
                </div>
            </div>
        </div>
    )
}