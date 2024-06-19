import searchIcon from '../../assets/images/search-icon.png'
import {useState} from 'react'
import './search-bar.css'

export default function SearchBar(){
    const [searchQuery,setQuery] = useState('');
    function handleQueryChange(e){
        setQuery(e.target.value)
    }
    return (
        <span className="home-search-container" >
            <input 
                className = "home-search-input"
                placeholder="Nhập nội dung tìm kiếm..."
                type="text"
                value={searchQuery}
                onChange={handleQueryChange}        
            />
            <div className="home-search-icon-background">
                <img src={searchIcon} alt="SearchIcon" className='home-search-bar-icon'/>
            </div>
        </span>
    )
}