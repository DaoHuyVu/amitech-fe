import HorizontalNavBar from "../nav/HorizontalNavBar";
import SearchBar from "../SearchBar";
import phone from "../../assets/images/phone.png"
import mail from "../../assets/images/mail.png"
import LanguageChooser from "./LanguageChooser";
import NavBarMenuItem from "../nav/NavBarMenuItem";
export default function HomeHeader(){
    const itemStyle = {
        color : 'var(--header-contact-color)'
    }
    const contactList = <>
        <span className="flex col-gap-sm item-align-baseline" style={itemStyle}>
            <span className="flex-item-center"><img className="icon" src={phone} alt="Phone"/></span>
            <NavBarMenuItem name="0979 796 584" link="tel:0979796584" />
            <p>|</p>
        </span>
        
        <span className="flex col-gap-sm item-align-baseline" style={itemStyle}>
            <span className="flex-item-center"><img className="icon" src={phone} alt="Phone" /></span>
            <NavBarMenuItem name="(024) 22 33 55 66" link="tel:(024) 22 33 55 66" />
            <p>|</p>
        </span>
        
        <span className="flex col-gap-sm" style={itemStyle}>
            <span className="flex-item-center"><img className="icon" src={mail} alt="Mail" /></span>
            <NavBarMenuItem name="contact@amitech.com" link="mailto:contact@amitech.com" />
        </span>
    </>
    const miscList = <>
        <span className="flex col-gap-sm item-align-baseline" style={itemStyle}>
            <LanguageChooser />
            <p>|</p>
        </span>
        <span className="flex col-gap-sm item-align-baseline" style={itemStyle}>
            <NavBarMenuItem name="Liên hệ" link="/lien-he" style={itemStyle}/>
            <p>|</p>
        </span>
        <span className="flex col-gap-sm" style={itemStyle}>
            <NavBarMenuItem name="Tuyển dụng" link="/tuyen-dung" style={itemStyle}/>
        </span>
    </>
    return(
        <div className="contact-section-container">
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