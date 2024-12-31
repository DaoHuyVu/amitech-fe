import { NavLink, useLocation } from "react-router-dom"
import ListDelimiter from "../nav/ListDelimiter"
import { useEffect, useState } from "react"
const languages = [    
    {
        name : 'VN',
    },
    {
        name : 'EN',
    }
]
export default function LanguageChooser(){
    const location = useLocation()
    const [selectedLanguageId,setSelectedLanguageId] = useState(0)
    const handleSelectLanguage = (idx) => {
        setSelectedLanguageId(idx)
        window.localStorage.setItem('lang',idx)
    }
    useEffect(() => {
        const lang = window.localStorage.getItem('lang')
        if(lang !== null){
            setSelectedLanguageId(lang)
        }
        else{
            window.localStorage.setItem('lang',selectedLanguageId)
        }
    },[selectedLanguageId])
    const languageItems = languages.map((language,index) => {
        const cl = 'language-item__link'
        return (
           <div key={index} className="language-item" >
            <a
                onClick={() => handleSelectLanguage(index)}
                href={`${location.pathname}`} 
                className={ index === parseInt(selectedLanguageId) ? `language-item__link--active ${cl}` : `language-item__link--pending ${cl}`
            }>
                {language.name}
            </a>
           </div>
        )
    })
    return (
       <ListDelimiter elements={languageItems} delimiter="-"/>
    )
}