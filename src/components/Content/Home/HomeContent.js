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
        <main id="home">
            <DigitalTransformation />
            <Introduction />
            <Solution />
            <Product />
            <Project />
            <News />
            <Customer />
        </main>
    )
}