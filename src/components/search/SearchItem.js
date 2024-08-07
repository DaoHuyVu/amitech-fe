import {getPostNavigation, getPostProfile} from '../../services/util'
import './search-item.css'
import { Link } from 'react-router-dom'
export default function SearchItem({item,className='',style}){
    return (
        <Link className={`${className} container-fluid`} style={style} to={`${getPostNavigation(item)}/${item.attributes.slug}`}>
           <div className='row'>
                <div className='col-12 col-sm-5 col-xxl-4'>
                    <img src={getPostProfile(item)} alt='Search Item' width='100%'/>
                </div>
                <div className='col-12 col-sm-7 col-xxl-8'>
                    <h4 style={{color : 'black'}} className='search-item__title'>{item.attributes.postTitle}</h4>
                </div>
            </div>
        </Link>
    )
}