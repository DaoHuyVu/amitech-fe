import './project.css'
import ProjectDetailSection1 from './ProjectDetailSection1'
import ProjectDetailSection2 from './ProjectDetailSection2'
import axios from '../../../services/AxiosInstance';
import { useLoaderData } from 'react-router-dom';

export async function projectLoader({params}){
    return await axios.get(`posts?filters[id]=${params.id}&populate=*`); 
}
export default function ProjectContent(){
    const project = useLoaderData().data.data
    return(
        <>
            <ProjectDetailSection1 project={project[0]}/>
            <ProjectDetailSection2 project={project[0]}/>
        </>
    )
}