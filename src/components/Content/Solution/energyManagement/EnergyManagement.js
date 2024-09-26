import './solution.css'
import SolutionDetailBanner from '../SolutionDetailBanner'
import Overview from './SolutionDetailOverview'
import Functionality from './Functionality'
import Benefit from './Benefit'
import SystemModel from './SystemModel'
import Customer from './Customer'
import OtherSolutions from './OtherSolutions'
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { getNavigationDetailById } from '../../../../services/navigation'
export default function EnergyManagement(){
    const [navigation,setNavigation] = useState(null)
    const location = useLocation()
    useEffect(()=>{
        const fetchNav = async () => {
            try{
                // 4 is solution category id
                const res = await getNavigationDetailById(4)
                setNavigation(res.data.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchNav()
    },[location])
    return(
        <div id='solution-detail'>
            {navigation && <SolutionDetailBanner navigation={navigation}/>}
            <Overview />
            <Functionality />
            <Benefit />
            <SystemModel />
            <Customer />
            <OtherSolutions/>
        </div>
    )
}