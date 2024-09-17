import LanguageChooser from "./LanguageChooser";
import SearchBar from '../search/SearchBar'
import Navigatable from "../nav/Navigatable";
import ListDelimiter from "../nav/ListDelimiter";
import { useEffect, useState } from "react";
import { getHeaderContacts, getSecondaryNavigation } from "../../services/header";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const contactIcons = [faPhone,faPhone,faEnvelope]
export default function HomeHeaderTop(){
    const [navigations,setNavigations] = useState([])
    const [contacts,setContacts] = useState([])

    useEffect(() => {
        const fetchNavs = async () => {
            try{
                const res = await getSecondaryNavigation()
                setNavigations(res.data.data)
            }catch(err){
                console.log(err)
            }
        }
        const fetchContacts = async () => {
            try{
                const res = await getHeaderContacts()
                setContacts(res.data.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchNavs()
        fetchContacts()
    },[])
    const itemStyle = {
        color : '#FFFFFFCC'
    }
    const contactList = contacts.map((contact,idx) => 
        <a href={contact.attributes.to} key={contact.attributes.id} style={itemStyle} className="d-flex align-items-center" target="_blank" rel='noreferrer'>
            <FontAwesomeIcon icon={contactIcons[idx]}/>
            <p >{contact.attributes.info}</p>
        </a>
    )
    const navigationList = navigations.map((navigation) => 
        <Navigatable to={navigation.slug} key={navigation.id} style={itemStyle}>
            <p>{navigation.name}</p>
        </Navigatable>
    )
    navigationList.unshift(<LanguageChooser />)
    return(
            <div id="header-home-top">
                <div className="container py-xl-2 d-none d-xxxl-block">
                    <div className='d-flex flex-row-reverse column-gap-4 '>
                            <ListDelimiter elements={navigationList} style={itemStyle}/>
                            <SearchBar />
                            <ListDelimiter elements={contactList} style={itemStyle}/>
                    </div>
                </div>
            </div>
        )
}