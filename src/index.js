import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Import App

const router = createBrowserRouter()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode >
      <BrowserRouter> {/* Bọc ứng dụng bằng BrowserRouter */}
        <App />
      </BrowserRouter>
    </React.StrictMode>
);