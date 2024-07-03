import IntroductionSection1 from "./IntroductionSection1"
import IntroductionSection2 from "./IntroductionSection2"
import IntroductionSection3 from "./IntroductionSection3"
import IntroductionSection4 from "./IntroductionSection4"
import IntroductionSection5 from "./IntroductionSection5"
import Recruitment from "./Recruitment"
import './introduction.css'
export default function IntroductionContent(){
    return(
        <>
            <IntroductionSection1 />
            <IntroductionSection2 />
            <IntroductionSection3 />
            <IntroductionSection4 />
            <IntroductionSection5 />
            <Recruitment />
        </>
    )
}