import DigitalTransformation from "./DigitalTransformation";
import Introduction from './Introduction'
import Solution from "./Solution";
import Product from "./Products";
import HomeSection5 from "./HomeSection5";
import HomeSection6 from "./HomeSection6";
import HomeSection7 from "./HomeSection7";
import './home.css'
export default function HomeContent(){
    return(
        <div id="home">
            <DigitalTransformation />
            <Introduction />
            <Solution />
            <Product />
            <HomeSection5 />
            <HomeSection6 />
            <HomeSection7 />
        </div>
    )
}