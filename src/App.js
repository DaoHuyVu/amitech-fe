import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useEffect} from "react";
import Home from './pages/Home/Home'
import {Routes, Route, useLocation} from 'react-router-dom';
import Products from "./pages/product/Products";
import News from "./pages/news/News";
import Quote from "./pages/quote/Quote";
import Contact from "./pages/contact/Contact";
import Solution from "./pages/solution/Solution";
import Recruitment from "./pages/recruitment/Recruitment";
import Introduction from "./pages/Introduction/Introduction";
import Project from "./pages/project/Project";
import JobDetails from "./pages/recruitment/JobDetails";
import NewsDetail from "./pages/news/NewsDetail";

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/thiet-bi-san-pham-cong-nghiep" element={<Products/>}/>
          <Route path="/tin-tuc-va-su-kien" element={<News/>}/>
          <Route path="/tin-tuc-va-su-kien/:id" element={<NewsDetail/>}/>
          <Route path="/bao-gia" element={<Quote/>}/>
          <Route path="/lien-he" element={<Contact/>}/>
          <Route path="/giai-phap-chuyen-doi-so" element={<Solution/>}/>
          <Route path="/tuyen-dung" element={<Recruitment/>}/>
          <Route path="/tuyen-dung/:id" element={<JobDetails/>}/>
          <Route path="/gioi-thieu" element={<Introduction/>}/>
          <Route path="/du-an-tieu-bieu" element={<Project/>}/>
        </Routes>
      </div>
  );
}

export default App;
