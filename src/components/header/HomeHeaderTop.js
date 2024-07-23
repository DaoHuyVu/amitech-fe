import phone from "../../assets/images/phone.png"
import mail from "../../assets/images/mail.png"
import LanguageChooser from "./LanguageChooser";
import NavBarMenuItem from "../nav/NavBarMenuItem";
import HorizontalNavBar from "../nav/HorizontalNavBar";
import SearchBar from '../search/SearchBar'
export default function HomeHeaderTop(){
    const itemStyle = {
        color : '#FFFFFFCC'
    }
    const contactList = <>
        <NavBarMenuItem link="tel:0979796584" style = {itemStyle}>
                <img className="nav-bar-icon" src={phone} alt="Phone"/>
                <p>0979 796 584</p>
                <p>|</p>
        </NavBarMenuItem>
        <NavBarMenuItem link="tel:(024) 22 33 55 66" style = {itemStyle}>
            <img className="nav-bar-icon" src={phone} alt="Phone"/>
            <p>(024) 22 33 55 66</p>
            <p>|</p>
        </NavBarMenuItem>
        <NavBarMenuItem link="mailto:contact@amitech.com" style = {itemStyle}>
            <img className="nav-bar-icon" src={mail} alt="Mail"/>
            <p>contact@amitech.com</p>
        </NavBarMenuItem>
</>
const miscList = <>
    <LanguageChooser style={itemStyle}/> 
    <NavBarMenuItem link="/lien-he" style = {itemStyle}>
        <p>Liên hệ</p>
        <p>|</p>
    </NavBarMenuItem>
   
    <NavBarMenuItem link="/tuyen-dung" style = {itemStyle}>
        <p>Tuyển dụng</p>
    </NavBarMenuItem>
</>
    return(
            <div id="header-home-top">
                <div className="container-fluid py-2">
                    <div className='d-flex flex-row-reverse column-gap-3'>
                            <HorizontalNavBar>
                                {miscList}
                            </HorizontalNavBar>
                            <SearchBar />
                            <HorizontalNavBar>
                                {contactList}
                            </HorizontalNavBar>
                    </div>
                </div>
            </div>
        )
}