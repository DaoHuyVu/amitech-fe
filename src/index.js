import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home />
  },
  {
    path : '/trang-chu',
    element : <Home />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <RouterProvider router={router}/>
  </React.StrictMode>
);

