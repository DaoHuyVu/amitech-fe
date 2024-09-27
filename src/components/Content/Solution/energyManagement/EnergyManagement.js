import './solution.css'
import SolutionDetailBanner from '../SolutionDetailBanner'
import Overview from './SolutionDetailOverview'
import Functionality from './Functionality'
import Benefit from './Benefit'
import SystemModel from './SystemModel'
import Customer from './Customer'
import OtherSolutions from './OtherSolutions'
export default function EnergyManagement(){
    return(
        <div id='solution-detail'>
            <SolutionDetailBanner />
            <Overview />
            <Functionality />
            <Benefit />
            <SystemModel />
            <Customer />
            <OtherSolutions/>
        </div>
    )
}