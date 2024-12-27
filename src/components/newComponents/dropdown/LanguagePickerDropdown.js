import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UNIT } from '../../../constants'
import Spacer from '../spacer/Spacer'
import styles from './LanguageDropdown.module.css'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
const languages = [    
    {
        name : 'Việt Nam',
        flag : '/vn_flag.png',
    },
    {
        name : 'English',
        flag : '/en_flag.png',
    }
]
export default function LanguagePickerDropdown(){
    const [selectedLanguageId,setSelectedLanguageId] = useState(0)
    const location = useLocation()
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
    const selectedLanguage = languages[selectedLanguageId]
    return(
        <>
            <button className={`${styles.selectLanguageContainer}`}>
                <span className={`${styles.selectLanguageItem}`} >
                    <img alt='flag' src={selectedLanguage.flag} className={`${styles.languageFlag}`}/>
                    <Spacer size={UNIT}/>
                        {selectedLanguage.name}
                    <Spacer size={UNIT}/>
                    <FontAwesomeIcon icon={faCaretDown} className={`${styles.languageDropdownIcon}`}/>
                </span>
                <div className={`${styles.languageDropdownContainer}`}>
                {
                    languages.map((lang,idx) => {
                        return(
                            <a href={`${location.pathname}`} key={idx} className={`${styles.selectLanguageItem}`} onClick={()=> handleSelectLanguage(idx)}>
                                <img alt='flag' src={lang.flag} className={`${styles.languageFlag}`}/>
                                <Spacer size={UNIT}/>
                                {lang.name}
                            </a>
                        )
                    })
                }
                </div>
            </button>
        </>
    )
}
