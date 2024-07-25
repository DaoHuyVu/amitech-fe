import { Link } from "react-router-dom"
export default function Logo(props){
    return(
        <Link to={props.to} className="flex-item-center">
            <img src = {props.img} alt ="Logo"/>
        </Link>
    )
}