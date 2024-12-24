import {getPostNavigation, getPostProfile} from '../../../services/util'
import styles from './search-item.module.css'
import { Link } from 'react-router-dom'
export default function SearchItem({item}){
    return (
        <Link className={`container ${styles.searchContainer} mb-5` }  to={`${getPostNavigation(item)}/${item.attributes.slug}`}>
           <div className='row'>
                <div className='col-12 col-sm-5 col-xxl-3 p-3' >
                    <img src={getPostProfile(item)} alt='Search Item' style={{height: '100%',margin : 'auto'}} />
                </div>
                <div className='col-12 col-sm-7 col-xxl-9 p-3 text-center text-sm-start'>
                    <h3 style={{color : '#4d4d4d'}} className={`${styles.searchItemTitle} `}>{item.attributes.postTitle}</h3>
                    <h6 style={{color : '#4d4d4d'}} className={`${styles.searchItemExcerp}`}>{item.attributes.excerp}</h6>
                </div>
            </div>
        </Link>
    )
}