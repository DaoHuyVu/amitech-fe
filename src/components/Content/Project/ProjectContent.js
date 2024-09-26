import { useLocation } from 'react-router-dom'
import './project.css'
import ProjectBanner from './ProjectBanner'
import ProjectSection2 from './ProjectSection2'
import { useEffect, useState } from 'react'
import { getNavigationDetailById} from '../../../services/navigation'
import { getPosts} from '../../../services/post'
export default function ProjectContent(){
    const [navigation,setNavigation] = useState(null)
    const [postInfo,setPostInfo] = useState(null)
    const location = useLocation()
    useEffect(() => {
        const fetchNav = async () => {
           try{
            // 3 is project category id
            const res = await getNavigationDetailById(3)
            setNavigation(res.data.data)
           }catch(err){
            console.log(err)
           }         
        }
        fetchNav()
    },[location])
    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const res = await getPosts(navigation.attributes.slug)
                setPostInfo(res)
            }catch(err){
                console.log(err)
            }
        }
        navigation && fetchPosts()
    },[navigation])
    return(
        <>
            {navigation && <ProjectBanner navigation={navigation}/>}
            {postInfo && <ProjectSection2 data={postInfo} />}
        </>
    )
}