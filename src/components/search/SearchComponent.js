import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

export default function SearchComponent(
    {handleClick}
){
    const ref = useRef(null)
    return(
        <div className="search-component">
            <FontAwesomeIcon className='search-icon' icon={faSearch} style={{color : '#4d4d4d'}}/>
            <input type="search" placeholder="Nhập tên công việc...." onChange={(e) => {ref.current = e.target.value}}/>
            <button 
            className="btn" style={{background : 'linear-gradient(-90deg,#006ce7,#002a9e)',color : 'white'}}
            onClick={() => handleClick(ref.current)}>
                Tìm việc làm
            </button>
        </div>
    )
}