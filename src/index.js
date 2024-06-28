import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Import App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode >
      <BrowserRouter> {/* Bọc ứng dụng bằng BrowserRouter */}
        <App />
      </BrowserRouter>
    </React.StrictMode>
);