import HorizontalBorderedList from "./HorizontalBorderedList";
import SearchBar from "./common/SearchBar";
import '../../assets/styles/header/style.css'
import phone from "../../assets/images/phone.png"
import mail from "../../assets/images/mail.png"
import LanguageChooser from "./LanguageChooser";
export default function HomeHeader(){
    const contactList = <>
        <li className="list-item">
                <img className="icon" src={phone} alt={phone} />            
                <a href="tel:0979 796 584">
                    <p>0979 796 584</p>
                </a>
        </li>
        <li className="list-item">
            <span><img className="icon" src={phone} alt={phone} /></span>
            <a href="tel:(024) 22 33 55 66">
                <p>(024) 22 33 55 66</p>
            </a>
        </li>
        <li className="list-item">
            <img src={mail} alt={mail} className="icon"/>
            <a href="mailto:contact@amitech.com">
                <p>contact@amitech.com</p>
            </a>
        </li>
    </>
    const miscList = <>
        <li className="list-item">
            <LanguageChooser />
        </li>
        <li className="list-item">
            <a href="/LienHe">
                <p>Liên hệ</p>
            </a>
        </li>
        <li className="list-item">
            <a href="/tuyenDung">
                <p>Tuyển dụng</p>
            </a>
        </li>
    </>
    return(
        <div className="header-container">
            <HorizontalBorderedList>
                {miscList}
            </HorizontalBorderedList>
            <SearchBar />
            <HorizontalBorderedList>
                {contactList}
            </HorizontalBorderedList>
        </div>
    )
}