import Logo from '../Logo'
import LanguagePickerDropdown from '../newComponents/dropdown/LanguagePickerDropdown'
import SearchComponent from '../newComponents/search/SearchComponent'
import './header.css'
import { useEffect, useState } from 'react'
import { getNavigationById } from '../../services/navigation'
import NavItem from '../newComponents/nav/NavItem'
import Link from '../newComponents/link/Link'
export default function HeaderTop(){
    const [term,setTerm] = useState(null)
    useEffect(() => {
        const fetchTerm = async () => {
            // Id cua tuyen dung
            try{
                const res = await getNavigationById(10)
                setTerm(res.data.data)
            }catch(ex){
                console.log(ex)
            }
        }
        fetchTerm()
    },[])
    
    return(
        <div id='header-top' className='d-none d-xxxl-flex'>
            {
                term &&
                (<div className='container align-items-center justify-content-between h-100 d-flex'>
                    <Logo to="/" img="/logo-ami-2.png"/>
                    <div className='d-flex gap-3'>
                        <SearchComponent />
                        <LanguagePickerDropdown />
                        <div className='d-flex align-items-center gap-2'>
                            <span style={{fontSize: '18px'}}>|</span>
                            <Link to={term.attributes.slug}>{term.attributes.name}</Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}