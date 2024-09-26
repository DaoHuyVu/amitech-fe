import Header from "../components/header2/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function Home2() {
  return (
      <>
        <Header/>
        <Outlet />
        <Footer />
      </>
  )
}