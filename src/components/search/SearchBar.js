import searchIcon from '../../assets/images/search-icon.png'
import { useState} from 'react'
import './search-bar.css'
import { Form} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export default function SearchBar(){
    const {t} = useTranslation()
    const [searchQuery,setQuery] = useState('')
    function handleQueryChange(e){
        setQuery(e.target.value)
    }
    return (
        <Form className="home-search-container" action='tim-kiem' >
            <input 
                name='s'
                className = "home-search-input"
                placeholder={t('common.nhap-noi-dung-tim-kiem')}
                type="search"
                defaultValue={searchQuery}
                onChange={handleQueryChange}
            />
            <button className="home-search-icon-background" >
                <img src={searchIcon} alt="SearchIcon" className='home-search-bar-icon'/>
            </button>
           
        </Form>
    )
}