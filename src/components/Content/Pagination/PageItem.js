import './pagination.css'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
export default function PageItem({className='',style,page,to,type}){
    return( 
        type === 'selected' ?
        <span to={to} className={`${className} page-item page-item--selected`} style={style} >
            {page}
        </span> : 
        type === 'page' ? 
        <Link to={to} className={`${className} page-item page-item-selectable`} style={style} >
            {page}
        </Link> : 
        type === 'prev' ? 
        <Link to={to} className={`${className} page-item  page-item-selectable`} style={style}>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </Link> : 
        type === 'next' ? 
        <Link to={to} className={`${className} page-item page-item-selectable `} style={style}>
            <FontAwesomeIcon icon={faChevronRight} />
        </Link> : 
        type === 'dull' ?
        <span className={`${className} page-item`} style={style} >
            ...
        </span> : null
    )
}