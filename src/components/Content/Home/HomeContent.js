import DigitalTransformation from "./DigitalTransformation";
import Introduction from './Introduction'
import Solution from "./Solution";
import Product from "./Products";
import Project from "./Project";
import News from "./News";
import Customer from "./Customer";
import './home.css'
export default function HomeContent(){
    return(
        <div id="home">
            <DigitalTransformation />
            <Introduction />
            <Solution />
            <Product />
            <Project />
            <News />
            <Customer />
        </div>
    )
}