import Header from '../components/header2/Header.js'
import {Footer} from '../components/footer/Footer.js'
import { Outlet } from 'react-router-dom'
export default function Layout(){
    return(
        <>
            <Header />
            <Footer />
        </>
    )
}