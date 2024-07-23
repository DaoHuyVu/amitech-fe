import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useEffect} from "react";
import Home from './pages/home/Home'
import {Routes, Route, useLocation} from 'react-router-dom';
import Products from "./pages/product/Products";
import News from "./pages/news/News";
import Quote from "./pages/quote/Quote";
import Contact from "./pages/contact/Contact";
import Solution from "./pages/solution/Solution";
import Recruitment from "./pages/recruitment/Recruitment";

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/thiet-bi-san-pham-cong-nghiep" element={<Products/>}/>
          <Route path="/tin-tuc-va-su-kien" element={<News/>}/>
          <Route path="/bao-gia" element={<Quote/>}/>
          <Route path="/lien-he" element={<Contact/>}/>
          <Route path="/giap-phap-chuyen-doi-so" element={<Solution/>}/>
          <Route path="/tuyen-dung" element={<Recruitment/>}/>
        </Routes>
      </div>
  );
}

export default App;
