import Header from "../../components/header/HomeHeader";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
      <>
        <Header/>
        <Outlet/>
        <Footer />
      </>
  )
}