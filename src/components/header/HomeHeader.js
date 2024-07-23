import HomeHeaderTop from "./HomeHeaderTop";
import HomeHeaderMain from './HomeHeaderMain'
import './header.css'
export default function HomeHeader(){
    return(
        <div id="header" >
            <HomeHeaderTop />
            <HomeHeaderMain />
        </div>
    )
}