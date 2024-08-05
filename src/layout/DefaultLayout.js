import Header from "../components/header/HomeHeader";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { createContext, useEffect, useRef, useState } from "react";
import MenuSideBar from "../components/bar/MenuSideBar";
import './layout.css'
import {getPrimaryNavigation} from '../services/header'



export const sidebarContext = createContext()
export default function Home() {
  const [isShowSideBar,setIsShowSideBar] = useState(false)
  const [navigations,setNavigations] = useState([])
  const sidebarRef = useRef(null)
  
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
  
  useEffect(() => {
    if(sidebarRef.current){
      if(isShowSideBar){
        sidebarRef.current.classList.add('sidebar--show')
      }
      else
        sidebarRef.current.classList.remove('sidebar--show')
    }
  },[isShowSideBar])

  const handleClose = () => {
    setIsShowSideBar(false)
  }
  return (
      <sidebarContext.Provider value={{isShowSideBar,setIsShowSideBar}}>
        <div id="layout" className={isShowSideBar ? 'show-menu-sidebar' : ''}>
          <Header />
          <MenuSideBar 
            ref={sidebarRef}
            handleClose={handleClose}
            className={`d-xxxl-none ${isShowSideBar ? 'sidebar-container--show' : ''}`}
            items={navigations}/>
            <Outlet/>
          <Footer />
        </div>
      </sidebarContext.Provider>
  )
}