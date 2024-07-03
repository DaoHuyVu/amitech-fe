import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode >
      <RouterProvider router={router}/>
    </React.StrictMode>
);
