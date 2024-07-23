import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/home/Home'
import HomeContent from './components/Content/Home/HomeContent';
import Introduction from './components/Content/Introduction/IntroductionContent';
import Project from './components/Content/Project/ProjectContent'
import Solution from './components/Content/Solution/SolutionContent';
import Products from './components/Content/ProductsContent/ProductsContent';
import News from './components/Content/NewsContent/NewsContent2'
import Quote from './components/Content/QuoteContent/QuoteContent'
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path : '/',
    element : <Home />,
    children : [
      {
        index : true,
        element : <HomeContent />
      },
      {
        path : 'gioi-thieu',
        element : <Introduction />
      },
      {
        path : 'du-an-tieu-bieu',
        element : <Project />
      },
      {
        path : 'giai-phap-chuyen-doi-so',
        element : <Solution />
      },
      {
        path : 'thiet-bi-va-san-pham-cong-nghiep',
        element : <Products />
      },
      {
        path : 'tin-tuc',
        element : <News />
      },
      {
        path : 'bao-gia',
        element : <Quote />
      }
    ]
  },
  
])
root.render(
    <React.StrictMode >
      <RouterProvider router={router}/>
    </React.StrictMode>
);