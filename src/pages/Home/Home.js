import Header from "../../components/header/HomeHeader";
import Footer from "../../components/footer/Footer";
import { Outlet ,useLocation} from "react-router-dom";
import { createContext, useEffect, useRef, useState } from "react";
import MenuSideBar from "../../components/bar/MenuSideBar";
import './app.css'
export const sidebarContext = createContext()
export default function Home() {
  const [isShowSideBar,setIsShowSideBar] = useState(false)
  const sidebarRef = useRef(null)
  const location = useLocation()
  const navigations = [
    {
      name : 'Trang chủ',
      link : '/',
    },
    {
      name : 'Giới thiệu',
      link : '/gioi-thieu',
    },
    {
      name : 'Dự án tiêu biểu',
      link : '/du-an-tieu-bieu',
    },
    {
      name : 'Giải pháp chuyển đổi số',
      link : '/giai-phap-chuyen-doi-so',
      children : [
        {
          name : 'Quản lý năng lượng INERGY',
          link : '/quan-ly-nang-luong-inergy'
        },
        {
          name : 'Quản lý kho',
          link : '/quan-ly-kho'
        }
      ]
    },
    {
      name : 'Thiết bị & sản phẩm công nghiệp',
      link : '/thiet-bi-va-san-pham-cong-nghiep',
      children : [
        {
          name : 'Thiết bị giám sát điện',
          param : 'Thiết bị giám sát điện'
        }
      ]
    },
    {
      name : 'Tin tức và sự kiện',
      link : '/tin-tuc',
    },
    {
      name : 'Báo giá',
      link : '/bao-gia',
    }
  ]
  
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

  useEffect(() => {
    window.scrollTo(0,0)
  },[location.pathname])

  
  return (
      <sidebarContext.Provider value={{isShowSideBar,setIsShowSideBar}}>
        <div id="app" className={isShowSideBar ? 'show-menu-sidebar' : ''}>
          <Header />
          <MenuSideBar 
            ref={sidebarRef}
            handleClose={handleClose}
            className={`d-xxxl-none ${isShowSideBar ? 'sidebar-container--show' : ''}`}
            items={navigations}/>
          <Outlet />
          <Footer />
        </div>
      </sidebarContext.Provider>
  )
}