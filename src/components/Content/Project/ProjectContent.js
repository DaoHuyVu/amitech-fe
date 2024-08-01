import { useLocation } from 'react-router-dom'
import './project.css'
import ProjectBanner from './ProjectBanner'
import ProjectSection2 from './ProjectSection2'
import { useEffect, useState } from 'react'
import { getNavigation} from '../../../services/navigation'
export default function ProjectContent(){
    const [navigation,setNavigation] = useState(null)
    const location = useLocation()
    useEffect(() => {
        const fetchNav = async () => {
           try{
            const res = await getNavigation(location.pathname)
            setNavigation(res.data.data[0])
           }catch(err){
            console.log(err)
           }         
        }
        fetchNav()
    },[location])
    return(
        <>
            {navigation && <ProjectBanner navigation={navigation}/>}
            <ProjectSection2 navigation={navigation}/>
        </>
    )
}