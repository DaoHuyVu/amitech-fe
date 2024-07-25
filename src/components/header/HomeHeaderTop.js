import phone from "../../assets/images/phone.png"
import mail from "../../assets/images/mail.png"
import LanguageChooser from "./LanguageChooser";
import SearchBar from '../search/SearchBar'
import Navigatable from "../nav/Navigatable";
import ListDelimiter from "../nav/ListDelimiter";
export default function HomeHeaderTop(){
    const contacts = [
        {
            link : 'tel:0979796584',
            icon : phone,
            text : '0979796584'
        },
        {
            link : 'tel:(024) 22 33 55 66',
            icon : phone,
            text : '(024) 22 33 55 66'
        },
        {
            link : 'mailto:contact@amitech.com',
            icon : mail,
            text : 'contact@amitech.com'
        }
    ]
    const navigations = [
        {
            link : '/lien-he',
            name : 'Liên hệ'
        },
        {
            link : '/tuyen-dung',
            name : 'Tuyển dụng'
        }
    ]
    const itemStyle = {
        color : '#FFFFFFCC'
    }
    const contactList = contacts.map((contact,index) => 
        <a href={contact.link} key={index} style={itemStyle} className="d-flex align-items-center">
            <img src={contact.icon} alt='Icon' />
            <p >{contact.text}</p>
        </a>
    )
    const navigationList = navigations.map((navigation,index) => 
        <Navigatable to={navigation.link} key={index} style={itemStyle}>
            <p>{navigation.name}</p>
        </Navigatable>
    )
    navigationList.unshift(<LanguageChooser />)
    return(
            <div id="header-home-top">
                <div className="container-fluid py-xl-2 d-none d-xl-block">
                    <div className='d-flex flex-row-reverse column-gap-3 '>
                            <ListDelimiter elements={navigationList} style={itemStyle} />
                            <SearchBar />
                            <ListDelimiter elements={contactList} style={itemStyle}/>
                    </div>
                </div>
            </div>
        )
}