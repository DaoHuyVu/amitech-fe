import { useState } from "react"

export default function LanguageChooser(){
    const [chosenLanguage,setLang] = useState('VN')
    const languages = ['VN','EN']
    function handleChangeLanguage(lang){
        setLang(lang)
    }
    const activeLanguageStyle = {
        color : '#00C2FF'
    }
    const inactiveLanguageStyle = {
        color : '#FFFFFFCC'
    }
    const languageComponent = languages.map(language => {
       return chosenLanguage === language ? 
        <p className="language-chooser__language-item" key = {language}>
            <a href={language} style={activeLanguageStyle} className="language-item__link">
                {language}
            </a>
        </p>
            :
        <p  className="language-chooser__language-item" key = {language} onClick={() => handleChangeLanguage(language)} >
            <a href={language} style={inactiveLanguageStyle} className="language-item__link">
                {language}
            </a>
        </p>
    })
    return (
       <span className="language-chooser">
            {languageComponent}
       </span>
    )
}