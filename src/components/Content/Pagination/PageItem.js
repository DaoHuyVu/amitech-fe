import './pagination.css'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function PageItem({className='',style,page,onClick,type}){
    return( 
        type === 'selected' ?
        <span className={`${className} page-item page-item--selected`} style={style} >
            {page}
        </span> : 
        type === 'page' ? 
        <span onClick={onClick} className={`${className} page-item page-item-selectable`} style={style} >
            {page}
        </span> : 
        type === 'prev' ? 
        <span onClick={onClick} className={`${className} page-item  page-item-selectable`} style={style}>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </span> : 
        type === 'next' ? 
        <span onClick={onClick} className={`${className} page-item page-item-selectable `} style={style}>
            <FontAwesomeIcon icon={faChevronRight} />
        </span> : 
        type === 'dull' ?
        <span className={`${className} page-item`} style={style} >
            ...
        </span> : null
    )
}