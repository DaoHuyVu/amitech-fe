import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from "./pages/product/Products";
import Contact from "./pages/contact/Contact";
import News from "./pages/news/News";
import Recruitment from "./pages/recruitment/Recruitment";
import JobDetails from "./pages/recruitment/JobDetails";
import Solution from "./pages/solution/Solution";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Solution/>
  },
  {
    path: '/trang-chu',
    element: <Home/>
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
);

