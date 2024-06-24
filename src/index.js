import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Introduction from './pages/Introduction/Introduction';
import Activities from './pages/Activity/Activities';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home />
  },
  {
    path : '/trang-chu',
    element : <Home />
  },
  {
    path : '/gioi-thieu',
    element : <Introduction />,
  },
  {
    path : '/hinh-anh-hoat-dong',
    element : <Activities />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <RouterProvider router={router}/>
  </React.StrictMode>
);

