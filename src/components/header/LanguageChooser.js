import { NavLink, useLocation } from "react-router-dom"
import ListDelimiter from "../nav/ListDelimiter"

export default function LanguageChooser(){
    const location = useLocation()
    const languages = [
        {
            name : 'VN',
            urlPrefix : null
        },
        {
            name : 'EN',
            urlPrefix : '/en'
        }
    ]
    const languageItems = languages.map((language,index) => {
        const to = language.urlPrefix !== null ? `${language.urlPrefix}${location.pathname}` : location.pathname
        const cl = 'language-item__link'
        return (
           <div key={index} className="language-item">
            <NavLink 
                to={to} 
                className={({isActive}) => 
                    isActive ? `language-item__link--active ${cl}` : `language-item__link--pending ${cl}`
            }>
                {language.name}
            
            </NavLink>
           </div>
        )
    })
    return (
       <ListDelimiter elements={languageItems} delimiter="-"/>
    )
}