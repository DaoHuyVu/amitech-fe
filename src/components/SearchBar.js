import searchIcon from '../assets/images/search-icon.png'
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
            <div className="search-icon-background">
                <img src={searchIcon} alt="SearchIcon" className='icon'/>
            </div>
        </span>
    )
}