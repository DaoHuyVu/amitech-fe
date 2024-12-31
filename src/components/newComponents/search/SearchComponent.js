import { useState } from 'react'
import styles from './SearchComponent.module.css'
import { Form } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
export default function SearchComponent(){
    const {t} = useTranslation()
    const [query,setQuery] = useState('')
    const handleQueryChange = (q) => {
        setQuery(q)
    }
    return(
        <Form className={`${styles.searchContainer}`} action='tim-kiem'>
            <input
                type='search'
                name='s'
                className={`${styles.searchInput}`}
                placeholder={t('common.nhap-noi-dung-tim-kiem')}
                defaultValue={query}
                onChange={handleQueryChange}
            />
            <button className={`${styles.searchIconContainer}`}>
                <FontAwesomeIcon className={`${styles.searchIcon}`} icon={faSearch}/>
            </button>
        </Form>
    )
}