import { getPostDetail } from '../../../services/post';
import './project.css'
import ProjectDetailSection1 from './ProjectDetailSection1'
import ProjectDetailSection2 from './ProjectDetailSection2'
import { useLoaderData } from 'react-router-dom';

export function projectLoader({params}){
    return getPostDetail(params.slug)
}
export default function ProjectContent(){
    const project = useLoaderData()
    return(
        <>
            <ProjectDetailSection1 project={project}/>
            <ProjectDetailSection2 project={project}/>
        </>
    )
}