import HorizontalNavBar from "./common/HorizontalNavBar";
import SearchBar from "./common/SearchBar";
import phone from "../../assets/images/phone.png"
import mail from "../../assets/images/mail.png"
import LanguageChooser from "./LanguageChooser";
import NavBarMenuItem from "./NavBarMenuItem";
export default function HomeHeader(){
    const itemStyle = {
        color : '#FFFFFFCC'
    }
    
    const contactList = <>
        <span className="flex-dir-row">
            <span className="flex-item-center"><img className="icon" src={phone} alt="Phone" /></span>
            <NavBarMenuItem name="0979 796 584" link="tel:0979796584" style={itemStyle}/>
        </span>
        
        <span className="flex-dir-row">
            <span className="flex-item-center"><img className="icon" src={phone} alt="Phone" /></span>
            <NavBarMenuItem name="(024) 22 33 55 66" link="tel:(024) 22 33 55 66" style={itemStyle}/>
        </span>
        
        <span className="flex-dir-row">
            <span className="flex-item-center"><img className="icon" src={mail} alt="Mail" /></span>
            <NavBarMenuItem name="contact@amitech.com" link="mailto:contact@amitech.com" style={itemStyle}/>
        </span>
    </>
    const miscList = <>
        <LanguageChooser />
        <NavBarMenuItem name="Liên hệ" link="/lien-he" style={itemStyle}/>
        <NavBarMenuItem name="Tuyển dụng" link="tuyen-dung" style={itemStyle}/>
    </>
    return(
        <div className="header-container">
           <HorizontalNavBar>
                {miscList}
            </HorizontalNavBar>
            <SearchBar />
            <HorizontalNavBar>
                {contactList}
            </HorizontalNavBar>
        </div>
    )
}