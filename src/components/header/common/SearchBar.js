import searchIcon from '../../../assets/images/search-icon.png'
import '../../../assets/styles/header/style.css'
import {useState} from 'react'
export default function SearchBar(){
    const [searchQuery,setQuery] = useState('');
    function handleQueryChange(e){
        setQuery(e.target.value)
    }
    return (
        <span className="search-container">
            <input 
                className = "search-input"
                placeholder="Nhập nội dung tìm kiếm..."
                type="text"
                value={searchQuery}
                onChange={handleQueryChange}        
            />
            <div className="search-icon-container">
                <img src={searchIcon} alt={searchIcon} className='icon'/>
            </div>
        </span>
    )
}