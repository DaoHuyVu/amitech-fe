import phone from "../../assets/images/phone.png"
import mail from "../../assets/images/mail.png"

export default function ContactList(){
    return(
        <div className="contact-list-container">
            <ul className="contact-list">
                <li className="list-item">
                    <img src={phone} alt={phone} />
                    <p> <a href="tel:0979 796 584"></a>0979 796 584</p>
                </li>
                <li className="list-item">
                    <img src={phone} alt={phone} />
                    <p> <a href="tel:(024) 22 33 55 66"></a>(024) 22 33 55 66</p>
                </li>
                <li className="list-item">
                    <img src={mail} alt={mail} />
                    <p> <a href="mailto:contact@amitech.com"></a>contact@amitech.com</p>
                </li>
            </ul>
        </div>
    )
}