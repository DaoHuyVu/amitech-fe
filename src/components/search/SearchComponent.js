import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function SearchComponent(
    {handleClick}
){
    const {t} = useTranslation()
    const ref = useRef(null)
    return(
        <div className="search-component">
            <FontAwesomeIcon className='search-icon' icon={faSearch} style={{color : '#4d4d4d'}}/>
            <input type="search" placeholder={t('common.nhap-ten-cong-viec')} onChange={(e) => {ref.current = e.target.value}}/>
            <button 
            className="btn" style={{background : 'linear-gradient(-90deg,#006ce7,#002a9e)',color : 'white'}}
            onClick={() => handleClick(ref.current)}>
                {t('common.tim-viec-lam')}
            </button>
        </div>
    )
}