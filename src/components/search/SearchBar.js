import searchIcon from '../../assets/images/search-icon.png'
import { useState} from 'react'
import './search-bar.css'
import { Form} from 'react-router-dom';
export default function SearchBar(){
    const [searchQuery,setQuery] = useState('')
    function handleQueryChange(e){
        setQuery(e.target.value)
    }
    return (
        <Form className="home-search-container" action='tim-kiem/page/1/' reloadDocument>
            <input 
                name='s'
                className = "home-search-input"
                placeholder="Nhập nội dung tìm kiếm..."
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