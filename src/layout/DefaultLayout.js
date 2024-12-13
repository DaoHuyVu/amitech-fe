import HomeHeader from "../components/header/HomeHeader";
import Footer from "../components/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { createContext, useEffect, useRef, useState } from "react";
import MenuSideBar from "../components/bar/MenuSideBar";
import './layout.css'
import {getPrimaryNavigation} from '../services/header'
import Header from '../components/header/Header'
import ScrollToHashElement from "../components/ScrollToHashElement";
import ScrollToTop from "../components/ScrollToTop";
export const sidebarContext = createContext()
export default function DefaultLayout() {
  const [isShowSideBar,setIsShowSideBar] = useState(false)
  const [navigations,setNavigations] = useState([])
  const location = useLocation()
  const previousLocation = useRef(location.pathname)
  useEffect(()=>{
    if(location.pathname !== previousLocation.current){
      previousLocation.current = location.pathname
      setIsShowSideBar(false)
    }
  },[location])
  useEffect(() => {
    const fetchNavs = async () => {
      try{
        const response = await getPrimaryNavigation()
        setNavigations(response.data.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchNavs()
  },[])
  const handleClose = () => {
    setIsShowSideBar(false)
  }
  return (
      <sidebarContext.Provider value={{isShowSideBar,setIsShowSideBar}}>
        <div id={isShowSideBar ? "layout__sidebar--show" : "layout" }>
          <ScrollToHashElement />
          {/* <Header/> */}
          {location.pathname === '/' ? <HomeHeader /> : <Header/>}
          <MenuSideBar 
            handleClose={handleClose}
            className='d-xxxl-none'
            items={navigations}
            isShowSideBar={isShowSideBar}
          />
            <main id={`${location.pathname === '/' ? 'main-content' : 'main-content-2'}`}>
              <Outlet/>
            </main>
          <Footer />
          <ScrollToTop />
        </div>
      </sidebarContext.Provider>
  )
}