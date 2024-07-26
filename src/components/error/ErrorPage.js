import { useRouteError } from "react-router-dom";
import './error.css'
export function ErrorPage(){
    const error = useRouteError()
    console.log(error)
    return(
        <div id="error-page">
            <h4>{error.status} {error.statusText}</h4>
        </div>
    )
}