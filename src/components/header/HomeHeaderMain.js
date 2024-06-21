import HorizontalNavBar from "../nav/HorizontalNavBar.js";
import NavBarMenuItem from '../nav/NavBarMenuItem.js';
import Logo from '../Logo.js'
import logo from '../../assets/logos/Group 558.png'
import NavBarItemDropDown from "../nav/NavBarItemDropDown.js";
export default function HomeHeaderMain(){
    const activeItemStyle = {
        color : '#002A9E'
    }
    const itemStyle = {
        color : '#152D5280'
    }
    const navStyle = {
        columnGap : '2em'
    }
    const navBarItems = <>
        <NavBarMenuItem link="/" style = {activeItemStyle}>
                <p>Trang chủ</p>
        </NavBarMenuItem>
        <NavBarItemDropDown name = 'Giới thiệu' link = "/gioi-thieu"  style={itemStyle}/>
        <NavBarMenuItem link = "/du-an-tieu-bieu" style={itemStyle}>
            <p>Dự án tiêu biểu</p>
        </NavBarMenuItem>
        <NavBarItemDropDown name = 'Giải pháp chuyển đổi số' link = "/giai-phap-chuyen-doi-so"  style={itemStyle}/>
        <NavBarItemDropDown name = 'Thiết bị & sản phẩn công nghiệp' link = "/thiet-bi-va-san-pham-cong-nghiep"  style={itemStyle}/>
        <NavBarMenuItem link = "/tin-tuc" style={itemStyle}>
            <p>Tin tức và sự kiện</p>
        </NavBarMenuItem>
        <NavBarMenuItem link = "/bao-gia" style={itemStyle}>
            <p>Báo giá</p>
        </NavBarMenuItem>
    </>
    return(
        <div id="header-home-main">
            <div className="container-fluid container-md my-3">
                <div className="d-flex justify-content-between">
                    <Logo img={logo}/>
                    <HorizontalNavBar style={navStyle}>
                        {navBarItems}
                    </HorizontalNavBar>
                </div>
            </div>
        </div>
    )
}