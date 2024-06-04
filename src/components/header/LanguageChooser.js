import { useState } from "react"

export default function LanguageChooser(){
    const [chosenLanguage,setLang] = useState('VN')
    const languages = ['VN','EN']
    const handleChangeLanguage = (e) => {
        setLang(e.target.value)
    }
    const languagesElement = languages.map(language => {
        return language === chosenLanguage ? 
            <p className="chosen-language" key={language}>{language} </p> 
                :
            <p onClick={handleChangeLanguage} value={language} className="unchosen-language" key={language} >{language}</p>
    })
    return (
        <>
            {languagesElement}
        </>
    )
}