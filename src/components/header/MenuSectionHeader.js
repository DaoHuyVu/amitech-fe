import HorizontalNavBar from "../nav/HorizontalNavBar.js";
import NavBarMenuItem from '../nav/NavBarMenuItem.js';
import Logo from '../Logo.js'
import logo from '../../assets/logos/Group 558.png'
import NavBarItemDropDown from "../nav/NavBarItemDropDown.js";
export default function MenuSectionHeader(){
    const activeItemStyle = {
        color : '#002A9E'
    }
    const itemStyle = {
        color : '#152D5280'
    }
    const navBarItems = <>
        <NavBarMenuItem name = 'Trang chủ' link = "/trang-chu" style={activeItemStyle}/>
        <NavBarItemDropDown name = 'Giới thiệu' link = "/gioi-thieu"  style={itemStyle}/>
        <NavBarMenuItem name = 'Dự án tiêu biểu' link = "/du-an-tieu-bieu" style={itemStyle}/>
        <NavBarItemDropDown name = 'Giải pháp chuyển đổi số' link = "/giai-phap-chuyen-doi-so"  style={itemStyle}/>
        <NavBarItemDropDown name = 'Thiết bị & sản phẩn công nghiệp' link = "/thiet-bi-&-spcn"  style={itemStyle}/>
        <NavBarMenuItem name = 'Tin tức và sự kiện' link = "/tin-tuc" style={itemStyle}/>
        <NavBarMenuItem name = 'Báo giá' link = "/bao-gia" style={itemStyle}/>
    </>
    return(
        <div className="menu-section-container ">
            <HorizontalNavBar>
                {navBarItems}
            </HorizontalNavBar>
            <Logo img={logo}/>
        </div>
    )
}