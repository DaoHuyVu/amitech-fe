import Header from "../../components/header/HomeHeader";
import Footer from "../../components/footer/Footer";
import HomeContent from "../../components/Content/Home/HomeContent";
import { Outlet ,useLocation} from "react-router-dom";
import { useEffect } from "react";
export default function Home() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  },[location.pathname])
  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  )
}